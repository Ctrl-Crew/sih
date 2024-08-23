// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

pub mod util;

use std::sync::Mutex;
use tauri::{Manager};
use crate::util::*;


fn main() {
  // println!("{}", detect_os());
  tauri::Builder::default()
    .setup(|app| {
      app.manage(Mutex::new(UserOS {
        os: "Unknown",
      }));
      detect_os(app.state());
      Ok(())
    })
    .invoke_handler(tauri::generate_handler![detect_os,get_linux_distro,send_os])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
