import { Paper, Text, Title, Button, rem } from "@mantine/core";
import classes from "./simpleCard.module.css";

const defaultImgUrl =
  "https://images.unsplash.com/photo-1481141973768-673903376812?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
type ArticleCardImageProps = {
  category: string;
  title: string;
  btnAction: string;
  handleBtn: () => void;
  height?: number;
  bgImg?: string;
};
export const ArticleCardImage: React.FC<ArticleCardImageProps> = ({
  category,
  title,
  btnAction,
  handleBtn,
  height = 300,
  bgImg = defaultImgUrl,
}) => {
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      className={classes.card}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${bgImg})`,
        height: rem(height),
      }}
    >
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <Button variant="white" color="dark" onClick={handleBtn}>
        {btnAction}
      </Button>
    </Paper>
  );
};
