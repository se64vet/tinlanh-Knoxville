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

const heroContent = {
  title: "Tĩnh Nguyện Hàng Ngày",
  description:
    "Tôi đã giấu lời Chúa trong lòng tôi, để tôi không phạm tội cùng Chúa. — Thi Thiên 119:11",
};

const PricingPage = () => {
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
        <Title order={2}>Tiêu đề video</Title>
        <Skeleton height={rem(300)} radius="md" animate={false} />
      </Stack>

      <Space h={"md"} />
      <Divider my={"lg"} />
      <Space h={"md"} />

      <Stack>
        <Title order={2}>Xem thêm</Title>
        <ArticlesCardsGrid />
      </Stack>
    </Container>
  );
};

export default PricingPage;
