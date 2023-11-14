import { Checkbox, Container, Group, TextInput, Textarea } from "@mantine/core";
import React from "react";

export const SimpleRequestForm = () => {
  return (
    <Container>
      <Group align="end">
        <TextInput size="md" label="Name" placeholder="Your name" />
        <Checkbox defaultChecked label="Show your name on this ticket" />
      </Group>

      <TextInput size="md" label="Issue" placeholder="How can we help you?" />

      <Textarea label="Description" placeholder="Please provide more details" />
    </Container>
  );
};
