"use client"

import "@mantine/core/styles.css"

import {
  ActionIcon,
  AppShell,
  Burger,
  Button,
  ColorSchemeScript,
  Container,
  Group,
  MantineProvider,
  Skeleton,
  Stack,
  Text,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { MantineLogo } from "@mantinex/mantine-logo"
import { IconMoon, IconSun } from "@tabler/icons-react"
import cx from "clsx"

import { NavbarMinimalColored } from "@/components/sidebar"

import { ModeToggle } from "./components/ModeToggle"
import { NavbarSegmented } from "./components/Navbar"
import classes from "./layout.module.css"

// export const metadata = {
//   title: "My Mantine app",
//   description: "I have followed setup instructions carefully",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure()
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true)

  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>
          <AppShell
            header={{ height: 60 }}
            navbar={{
              width: 300,
              breakpoint: "sm",
              collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
            }}
            padding="md"
          >
            <AppShell.Header>
              <Group h="100%" px="md">
                <Burger
                  opened={mobileOpened}
                  onClick={toggleMobile}
                  hiddenFrom="sm"
                  size="sm"
                />
                <Burger
                  opened={desktopOpened}
                  onClick={toggleDesktop}
                  visibleFrom="sm"
                  size="sm"
                />
                <Text fz={30} fw={700} ml="sm">
                  {" "}
                  Audits.{" "}
                </Text>
                <Container m={0} pos={"absolute"} right={5} top={5}>
                  {/* <ModeToggle  /> */}
                </Container>
              </Group>
            </AppShell.Header>
            <AppShell.Navbar p="md">
              {/* Navbar
        {Array(15)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} h={28} mt="sm" animate={false} />
          ))} */}
              <NavbarSegmented />
            </AppShell.Navbar>
            <AppShell.Main>{children}</AppShell.Main>
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  )
}
