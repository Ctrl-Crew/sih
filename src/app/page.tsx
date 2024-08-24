"use client"

import { useState } from "react"
import { Button, Text } from "@mantine/core"
import { invoke } from "@tauri-apps/api"

import { StatsGridIcons } from "./components/statsGrid"

export default function Home() {
  const [os, setOs] = useState<String>("")
  async function receive_os() {
    let userOS: String = await invoke("send_os")
    // console.log(userOS);
    setOs(userOS)
  }

  return (
    <>
      <h1>Home</h1>
      <StatsGridIcons />
      <Button m="lg" onClick={receive_os}>
        {" "}
        Get OS{" "}
      </Button>
      <Text fw={600} fz={20} m={"lg"}>
        {" "}
        {os}{" "}
      </Text>
    </>
  )
}
