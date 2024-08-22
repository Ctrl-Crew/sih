// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

pub mod util;

use crate::util::*;

fn main() {
  println!("{}", detect_os());
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![detect_os,get_linux_distro])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
