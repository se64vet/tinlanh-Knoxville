import { SimpleGrid, Card, Image, Text, AspectRatio, Box } from "@mantine/core";
import classes from "./cardGrid.module.css";
import { cardGridRenderProps } from "@/utils/global-types";

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
