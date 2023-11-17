import React from "react";
import { Group, Title } from "@mantine/core";

import classes from "./logo.module.css";
const Logo = () => {
  return (
    <Group align="center" justify="center" gap={0}>
      <Title order={1} size={"h3"} className={classes.text}>
        Tin Lành @Knoxville
      </Title>
    </Group>
  );
};

export default Logo;
