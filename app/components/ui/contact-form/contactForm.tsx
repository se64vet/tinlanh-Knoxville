"use client";
import React, { useState, useEffect } from "react";
import { z } from "zod";
import { useForm } from "@mantine/form";

import { zodResolver } from "mantine-form-zod-resolver";
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
import { toast } from "react-toastify";

//form schema & default values
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Thiếu tên | Name missing" }),
  email: z.string().email({ message: "Email không hợp lệ lệ | Invalid email" }),
  title: z.string().min(3, { message: "Thiếu tựa đề | Title missing" }),
  message: z.string().min(20, {
    message: "Nội dung phải ít nhất 20 ký tự | Minimum 20 letters",
  }),
});

export const GetInTouch: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  const contactForm = useForm({
    initialValues: {
      name: "",
      email: "",
      title: "",
      message: "",
    },
    validate: zodResolver(contactFormSchema),
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const handleSubmit = contactForm.onSubmit((values) => {
    toast.success("Đã gửi | Sent", {
      position: "top-center",
      autoClose: 2000,
    });
    console.log(values);
    contactForm.reset();
  });
  return (
    <Paper shadow="md" radius="lg">
      <div className={classes.wrapper}>
        <div
          className={classes.contacts}
          style={{ background: "mediumturquoise" }}
        >
          <Text fz="lg" fw={700} className={classes.title} c="#fff">
            THÔNG TIN | INFOS
          </Text>

          <ContactIconsList />
        </div>

        <form className={classes.form} onSubmit={handleSubmit}>
          <Text fz="lg" fw={700} className={classes.title}>
            LIÊN LẠC VỚI CHÚNG TÔI - CONTACT US
          </Text>

          <div className={classes.fields}>
            <SimpleGrid cols={{ base: 1, sm: 2 }}>
              <TextInput
                label="Tên  (Name)"
                placeholder="vd: Mai Nguyễn"
                {...contactForm.getInputProps("name")}
              />
              <TextInput
                label="Email"
                placeholder="vd: example@mail.com"
                {...contactForm.getInputProps("email")}
                required
              />
            </SimpleGrid>

            <TextInput
              mt="md"
              label="Tựa đề (Subject)"
              placeholder="vd: Người mới đến Knoxville"
              {...contactForm.getInputProps("title")}
              required
            />

            <Textarea
              mt="md"
              label="Nội dung (Message)"
              placeholder="vd: Xin cho biết thời gian nhóm lại của Hội Thánh"
              minRows={3}
              {...contactForm.getInputProps("message")}
            />

            <Group justify="flex-end" mt="md">
              <Button type="submit" className={classes.control}>
                Gửi (Send)
              </Button>
            </Group>
          </div>
        </form>
      </div>
    </Paper>
  );
};
