import { ArticlesCardsGrid } from "@/app/components/ui/card-grid/cardGrid";
import { HeroImageBackground } from "@/app/components/ui/hero/heroWithBg";
import { Container, Divider, Space, Title, Stack, Text } from "@mantine/core";
import React from "react";

const BlogPage = () => {
  const heroContent = {
    title: "Thông Báo | Bài Viết",
    description: "Các thông báo và bài viết được cập nhật hàng tuần",
  };
  return (
    <Container my={"md"}>
      <HeroImageBackground
        title={heroContent.title}
        description={heroContent.description}
      />

      <Space h={"md"} />
      <Divider my={"lg"} />
      <Space h={"md"} />

      <Stack>
        <Title order={2}>Thông Báo Mới</Title>
        {/* <ArticlesCardsGrid /> */}
        <Text fs={"italic"} c={"dimmed"}>
          Hiện tại không có thông báo nào
        </Text>
      </Stack>

      <Space h={"md"} />
      <Divider my={"lg"} />
      <Space h={"md"} />

      <Stack>
        <Title order={2}>Các Bài Viết Khác</Title>
        <Text fs={"italic"} c={"dimmed"}>
          Hiện tại không có bài viết mới nào
        </Text>
        {/* <ArticlesCardsGrid /> */}
      </Stack>
    </Container>
  );
};

export default BlogPage;
