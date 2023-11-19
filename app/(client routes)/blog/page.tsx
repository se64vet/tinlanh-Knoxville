import { ArticlesCardsGrid } from "@/app/components/ui/card-grid/cardGrid";
import { HeroImageBackground } from "@/app/components/ui/hero/heroWithBg";
import { Container, Divider, Space, Title, Stack } from "@mantine/core";
import React from "react";

const PricingPage = () => {
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
        <Title order={2}>Latest news</Title>
        {/* <ArticlesCardsGrid /> */}
      </Stack>

      <Space h={"md"} />
      <Divider my={"lg"} />
      <Space h={"md"} />

      <Stack>
        <Title order={2}>Blog posts</Title>
        {/* <ArticlesCardsGrid /> */}
      </Stack>
    </Container>
  );
};

export default PricingPage;
