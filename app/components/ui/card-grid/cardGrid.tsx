import {
  SimpleGrid,
  Card,
  Image,
  Text,
  Container,
  AspectRatio,
  Box,
} from "@mantine/core";
import classes from "./cardGrid.module.css";
import { cardGridRenderProps } from "@/utils/global-types";
import { useState } from "react";

const mockdata = [
  {
    title: "Top 10 places to visit in Norway this summer",
    image:
      "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    date: "August 18, 2022",
  },
  {
    title: "Best forests to visit in North America",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    date: "August 27, 2022",
  },
  {
    title: "Hawaii beaches review: better than you think",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    date: "September 9, 2022",
  },
  {
    title: "Mountains at night: 12 best locations to enjoy the view",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
    date: "September 12, 2022",
  },
];
type ArticlesCardsGridProps = {
  data: cardGridRenderProps[];
};
export const ArticlesCardsGrid: React.FC<ArticlesCardsGridProps> = ({
  data,
}) => {
  const cards = data.map((article) => {
    return (
      <Card
        key={article.title}
        p="md"
        radius="md"
        component="a"
        href={article.link}
        className={classes.card}
      >
        <AspectRatio ratio={1920 / 1080}>
          <Image src={article.image} alt="article image" />
        </AspectRatio>
        <Text c="dimmed" size="xs" tt="uppercase" fw={700} mt="md">
          {article.category}
        </Text>
        <Text className={classes.title} mt={5}>
          {article.title}
        </Text>
      </Card>
    );
  });

  return (
    <Box py="xl">
      <SimpleGrid cols={{ base: 1, sm: 2 }}>{cards}</SimpleGrid>
    </Box>
  );
};
