import { Checkbox, Container, Group, TextInput, Textarea } from "@mantine/core";
import React from "react";

export const SimpleRequestForm = () => {
  return (
    <Container>
      <Group align="end" mb={"md"}>
        <TextInput size="md" label="Tên" placeholder="Nguyễn Văn A" />
        <Checkbox defaultChecked label="Hiển thị tên trên bảng" />
      </Group>

      <TextInput
        size="md"
        label="Vấn đề"
        placeholder="Sức khoẻ của tôi"
        mb={"md"}
      />

      <Textarea
        label="Chi tiết"
        placeholder="Xin cho biết thêm để chúng tôi có thể cầu thay cho bạn"
      />
    </Container>
  );
};
