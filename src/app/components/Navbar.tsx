import { useState } from "react"
import Link from "next/link"
import { Button, SegmentedControl, Text } from "@mantine/core"
import {
  Icon2fa,
  IconDatabaseImport,
  IconFileAnalytics,
  IconFingerprint,
  IconHome,
  IconKey,
  IconLicense,
  IconLogout,
  IconMessage2,
  IconMessages,
  IconReceipt2,
  IconReceiptRefund,
  IconRocket,
  IconSettings,
  IconShoppingCart,
  IconSwitchHorizontal,
  IconUsers,
} from "@tabler/icons-react"

import { ModeToggle } from "./ModeToggle"
import classes from "./Navbar.module.css"

const tab = [
   {link: "/TriggerAudits", label: "Trigger Audit", icon: IconRocket},
  { link: "/", label: "Home", icon: IconHome },
  { link: "/PostAuditReport", label: "Post Audit report ", icon: IconReceipt2 },
  { link: "/AuditConfig", label: "Audit Config", icon: IconSettings },

  { link: "/Targets", label: "Targets", icon: IconDatabaseImport },
]

export function handleClick() {
  ;<Link href="/TriggerAudits"></Link>
}

export function NavbarSegmented() {
  // const [section, setSection] = useState<'account' | 'general'>('account');
  const [active, setActive] = useState("Billing")

  const links = tab.map((item) => (
    <Link
      href={item.link}
      key={item.label}
      className={`${classes.link} ${
        item.label === "Trigger Audit" ? classes.triggerAuditButton : ""
      }`}
      data-active={item.label === active || undefined}
      onClick={() => setActive(item.label)}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </Link>
  ))

  return (
    <>
      <nav className={classes.navbar}>
         

        <div className={classes.navbarMain}>{links}</div>

        <div className={classes.footer}>
          <a
            href="#"
            className={classes.link}
            onClick={(event) => event.preventDefault()}
          >
            <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
            <span>Change account</span>
          </a>

          <a
            href="#"
            className={classes.link}
            onClick={(event) => event.preventDefault()}
          >
            <IconLogout className={classes.linkIcon} stroke={1.5} />
            <span>Logout</span>
          </a>
        </div>

        <div className={classes.darktoggle}>
          <ModeToggle />
        </div>
      </nav>
    </>
  )
}
