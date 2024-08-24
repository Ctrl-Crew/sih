use std::env;
use std::process::Command;
use tauri;
use std::sync::Mutex;
use tauri::{Builder, GlobalWindowEvent, Manager};
use tauri::State;

// enum OS {
//     Windows,
//     Linux,
//     Unknown,  
// }

// enum LinuxDistro {
//     Ubuntu,
//     RedHat,
//     Arch,
//     Unknown,
// }

// struct UserSystem {
//     os: OS,
//     linux_distro: LinuxDistro,
// }

// impl UserSystem {
//     fn new() -> UserSystem {
//         UserSystem {
//             os: OS::Unknown,
//             linux_distro: LinuxDistro::Unknown,
//         }
//     }

//     fn set_os(&mut self, os: OS) {
//         self.os = os;
//     }

//     fn set_linux_distro(&mut self, linux_distro: LinuxDistro) {
//         self.linux_distro = linux_distro;
//     }
// }


#[derive(Default)]
pub struct UserOS {
  pub os: &'static str,
}

#[tauri::command]
pub fn detect_os(state: State<'_, Mutex<UserOS>>) {
    let mut user_os = state.lock().unwrap();
    match env::consts::OS 
    {
        "windows" => user_os.os = "Windows",
        "linux" => user_os.os = get_linux_distro(),
        _ => user_os.os = "Unknown",
    }
}

#[tauri::command]
// #[cfg(target_os = "linux")]
pub fn get_linux_distro() -> &'static str {
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
        "Ubuntu" => return "Ubuntu",
        "Red Hat Enterprise Linux" => return "RedHat",
        "Arch" => return "Arch",
        
        _ => return "Unknown",

    }
}

#[tauri::command]
pub fn send_os(state: State<'_, Mutex<UserOS>>) -> &'static str {
    let user_os = state.lock().unwrap();
    user_os.os
}