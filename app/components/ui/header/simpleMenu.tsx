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
  Skeleton,
  rem,
  ActionIcon,
  Box,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconSun, IconMoon } from "@tabler/icons-react";
import Link from "next/link";

import classes from "./simpleMenu.module.css";
import Logo from "../logo/logo";
import { usePathname } from "next/navigation";

const links = [
  { link: "/devotion", label: "Tĩnh Nguyện" },
  { link: "/pray", label: "Cầu Thay" },
  { link: "/blog", label: "Thông báo/ Bài viết" },
];

export function HeaderSimple() {
  const [opened, { open, close }] = useDisclosure(false);
  const { setColorScheme, colorScheme } = useMantineColorScheme();
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <Skeleton height={rem(30)} radius="md" />;
  }

  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={pathname === link.link ? true : undefined}
    >
      {link.label}
    </Link>
  ));

  const mobileItems = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={pathname === link.link ? true : undefined}
      onClick={close}
    >
      {link.label}
    </Link>
  ));

  const ThemeToggle = () => {
    return (
      <Group>
        <ActionIcon
          onClick={() =>
            colorScheme === "light"
              ? setColorScheme("dark")
              : setColorScheme("light")
          }
          variant="filled"
          size={"md"}
          color={colorScheme === "light" ? "dark" : "gray"}
        >
          {colorScheme === "light" ? (
            <IconMoon size={20} />
          ) : (
            <IconSun size={20} />
          )}
        </ActionIcon>
      </Group>
    );
  };

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.container}>
        <Stack align="stretch" justify="start" className={classes.stack}>
          <Group justify="space-between">
            <Link href={"/"} className={classes.logo}>
              <Logo />
            </Link>
            <Box visibleFrom="xs">
              <ThemeToggle />
            </Box>
          </Group>
          <Group
            gap={5}
            visibleFrom="xs"
            justify="center"
            className={classes.itemsWrapper}
          >
            {items}
          </Group>
        </Stack>

        <Box hiddenFrom="xs">
          <ThemeToggle />
        </Box>

        <Burger
          opened={opened}
          onClick={open}
          hiddenFrom="xs"
          size="md"
          ml={"lg"}
        />
        <Drawer opened={opened} onClose={close} size={"sm"} position="right">
          <Logo />
          <Space h={"lg"} />
          <Stack>{mobileItems}</Stack>
        </Drawer>
      </Container>
    </header>
  );
}
