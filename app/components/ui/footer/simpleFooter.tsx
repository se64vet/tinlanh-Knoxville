"use client";

import { Container, Group, Anchor, Stack, Title, Text } from "@mantine/core";
import classes from "./simpleFooter.module.css";
import Logo from "@/app/components/ui/logo/logo";
import Link from "next/link";

const links = [
  { link: "#", label: "Hội Thánh" },
  { link: "email:httlknoxville@gmail.com", label: "Góp Ý" },
  { link: "email:httlknoxville@gmail.com", label: "Liên Hệ" },
  { link: "#", label: "Tiếng Anh" },
];

export function FooterSimple() {
  const items = links.map((link) => (
    <Anchor<"a">
      c="dimmed"
      key={link.label}
      href={link.link}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Logo />

        <Stack gap={"xs"} align="center">
          <Title order={6} size={"h4"}>
            Thờ Phượng Chúa Nhật
          </Title>
          <Text>1:30PM - 3:30PM</Text>
          <Text>8000 Middlebrook Pike</Text>
          <Text>Knoxville, TN, 37909</Text>
        </Stack>

        <Stack>
          <Group className={classes.links}>{items}</Group>
          <small className="block">
            Build by{" "}
            <Link href={"#"} style={{ textDecoration: "none" }}>
              Lukasvm
            </Link>{" "}
            &copy; 2023 All rights reserved
          </small>
        </Stack>
      </Container>
    </div>
  );
}
