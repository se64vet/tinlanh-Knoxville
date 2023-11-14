import { FaqSimple } from "@/app/components/ui/faq/simpleFaq";
import { SimpleRequestForm } from "@/app/components/ui/forms/simpleRequest";
import { HeroImageBackground } from "@/app/components/ui/hero/heroWithBg";
import { Container, Divider, Space, Title, Stack } from "@mantine/core";
import React from "react";

const PricingPage = () => {
  return (
    <Stack my={"md"}>
      <HeroImageBackground />

      <Space h={"md"} />
      <Divider my={"lg"} />
      <Space h={"md"} />

      <Stack>
        <FaqSimple />
      </Stack>

      <Space h={"md"} />
      <Divider my={"lg"} />
      <Space h={"md"} />

      <Stack align="center" justify="center">
        <Title order={2}>Problem? Let us know</Title>
        <SimpleRequestForm />
      </Stack>
    </Stack>
  );
};

export default PricingPage;
