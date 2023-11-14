"use client";

import { useState, useEffect } from "react";
import {
  Container,
  Group,
  Burger,
  useMantineColorScheme,
  Button,
  Drawer,
  Stack,
  Space,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconSun, IconMoon } from "@tabler/icons-react";
import Link from "next/link";

import classes from "./simpleMenu.module.css";
import Logo from "../../logo";

const links = [
  { link: "/", label: "Feature" },
  { link: "/pricing", label: "Pricing" },
  { link: "/learn", label: "Learn" },
  { link: "/community", label: "Community" },
];

export function HeaderSimple() {
  const [opened, { open, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { setColorScheme, colorScheme } = useMantineColorScheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={() => {
        setActive(link.link);
      }}
    >
      {link.label}
    </Link>
  ));

  const ThemeToggle = () => {
    return (
      <Group>
        <Button
          onClick={() =>
            colorScheme === "light"
              ? setColorScheme("dark")
              : setColorScheme("light")
          }
          leftSection={
            colorScheme === "light" ? (
              <IconMoon size={20} />
            ) : (
              <IconSun size={20} />
            )
          }
          variant="outline"
          color="orange"
        >
          {colorScheme === "light" ? "Dark" : "Light"}
        </Button>
      </Group>
    );
  };

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Link href={"/"} className={classes.link}>
          <Logo />
        </Link>

        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <ThemeToggle />

        <Burger opened={opened} onClick={open} hiddenFrom="xs" size="sm" />
        <Drawer opened={opened} onClose={close} size={"sm"} position="right">
          <Logo />
          <Space h={"lg"} />
          <Stack>{items}</Stack>
        </Drawer>
      </Container>
    </header>
  );
}
