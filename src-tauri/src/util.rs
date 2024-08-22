use std::env;
use std::process::Command;
use tauri;

#[tauri::command]
pub fn detect_os() -> i32 {
    match env::consts::OS 
    {
        "windows" => return 0,
        "linux" => return get_linux_distro(),
        _ => return  -1,
    }
}

#[tauri::command]
#[cfg(target_os = "linux")]
pub fn get_linux_distro() -> i32 {
    let distro = Command::new("lsb_release")
    .arg("--id")
    .arg("--short")
    .output()
    .expect("Oopsie daisy");

    println!("{:?}",String::from_utf8_lossy(&distro.stdout));
    match (&*String::from_utf8_lossy(&distro.stdout))
            .strip_suffix('\n')
            .unwrap() 
    {
        "Ubuntu" => return 1,
        "Red Hat Enterprise Linux" => return 2,
        "Arch" => return 3,
        _ => return -1
    }
}