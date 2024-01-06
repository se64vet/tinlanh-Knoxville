import { FaqSimple } from "@/app/components/ui/faq/simpleFaq";
import { SimpleRequestForm } from "@/app/components/ui/forms/simpleRequest";
import { HeroImageBackground } from "@/app/components/ui/hero/heroWithBg";
import { Container, Divider, Space, Title, Stack, Box } from "@mantine/core";
import React from "react";

const PrayPage = () => {
  const heroContent = {
    title: "Cầu Nguyện | Cầu Thay",
    description:
      "Của tế lễ gian ác lấy làm gớm ghiếc cho Đức Giê-hô-va; Song lời cầu nguyện của người ngay thẳng được đẹp lòng Ngài - Châm Ngôn 15:8",
  };
  return (
    <Container my={"md"}>
      <HeroImageBackground
        title={heroContent.title}
        description={heroContent.description}
      />

      {/* <Space h={"md"} />
      <Divider my={"lg"} />
      <Space h={"md"} />

      <Box>
        <FaqSimple />
      </Box> */}

      <Space h={"md"} />
      <Divider my={"lg"} />
      <Space h={"md"} />

      <Stack align="center" justify="center">
        <Title order={2} ta={"center"}>
          Có vấn đề ? <br /> Hãy để chúng tôi cầu thay
        </Title>
        <SimpleRequestForm />
      </Stack>
    </Container>
  );
};

export default PrayPage;
