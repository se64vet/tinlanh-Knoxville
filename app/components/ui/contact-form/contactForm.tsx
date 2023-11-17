"use client";
import { useState, useEffect } from "react";
import {
  Paper,
  Text,
  TextInput,
  Textarea,
  Button,
  Group,
  SimpleGrid,
} from "@mantine/core";
import { ContactIconsList } from "./contactIcons";
import classes from "./contactForm.module.css";

export function GetInTouch() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Paper shadow="md" radius="lg">
      <div className={classes.wrapper}>
        <div
          className={classes.contacts}
          style={{ background: "mediumturquoise" }}
        >
          <Text fz="lg" fw={700} className={classes.title} c="#fff">
            Thông Tin Liên Lạc
          </Text>

          <ContactIconsList />
        </div>

        <form
          className={classes.form}
          onSubmit={(event) => event.preventDefault()}
        >
          <Text fz="lg" fw={700} className={classes.title}>
            LIÊN LẠC VỚI CHÚNG TÔI
          </Text>

          <div className={classes.fields}>
            <SimpleGrid cols={{ base: 1, sm: 2 }}>
              <TextInput label="Tên" placeholder="vd: Mai Nguyễn" />
              <TextInput
                label="Email"
                placeholder="vd: example@mail.com"
                required
              />
            </SimpleGrid>

            <TextInput
              mt="md"
              label="Tựa đề"
              placeholder="vd: Người mới đến Knoxville"
              required
            />

            <Textarea
              mt="md"
              label="Nội dung"
              placeholder="vd: Xin cho biết thời gian nhóm lại của Hội Thánh"
              minRows={3}
            />

            <Group justify="flex-end" mt="md">
              <Button type="submit" className={classes.control}>
                Gửi Ngay
              </Button>
            </Group>
          </div>
        </form>
      </div>
    </Paper>
  );
}
