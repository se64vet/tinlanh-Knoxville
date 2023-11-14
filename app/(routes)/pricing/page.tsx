import { ArticlesCardsGrid } from "@/app/components/ui/card-grid/cardGrid";
import { HeroImageBackground } from "@/app/components/ui/hero/heroWithBg";
import {
  Container,
  Divider,
  Space,
  Skeleton,
  rem,
  Title,
  Stack,
} from "@mantine/core";
import React from "react";

const PricingPage = () => {
  return (
    <Container my={"md"}>
      <HeroImageBackground />

      <Space h={"md"} />
      <Divider my={"lg"} />
      <Space h={"md"} />

      <Stack>
        <Title order={2}>Video Section</Title>
        <Skeleton height={rem(300)} radius="md" animate={false} />
      </Stack>

      <Space h={"md"} />
      <Divider my={"lg"} />
      <Space h={"md"} />

      <Stack>
        <Title order={2}>Blog Section</Title>
        <ArticlesCardsGrid />
      </Stack>
    </Container>
  );
};

export default PricingPage;
