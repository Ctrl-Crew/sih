import os
import subprocess

def check_cramfs_module():
    module_name = "cramfs"
    def is_module_loaded(module):
        try:
            result = subprocess.run(["lsmod"], capture_output=True, text=True)
            return module in result.stdout
        except Exception as e:
            print(f"Error checking loaded modules: {e}")
            return False
    def is_module_deny_listed(module):
        deny_list_files = [f for f in os.listdir('/etc/modprobe.d/') if f.endswith('.conf')]
        for file in deny_list_files:
            with open(f'/etc/modprobe.d/{file}', 'r') as f:
                if module in f.read():
                    return True
        return False
    if is_module_loaded(module_name):
        if is_module_deny_listed(module_name):
            if not is_module_loaded(module_name):
                return "Audit passed"
            else:
                return "Audit failed: Module is loaded despite deny listing"
        else:
            return "Audit failed: Module is not deny listed"
    else:
        if is_module_deny_listed(module_name):
            return "Audit passed"
        else:
            return "Audit failed: Module is neither available nor deny listed"
result = check_cramfs_module()
print(result)

