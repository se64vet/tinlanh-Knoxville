"use client";
import { ArticlesCardsGrid } from "@/app/components/ui/card-grid/cardGrid";
import { HeroImageBackground } from "@/app/components/ui/hero/heroWithBg";
import DevotionVideo from "@/app/components/ui/video-frame/devotionVideo";
import { cardGridRenderProps, devotionalVideo } from "@/utils/global-types";
import {
  Container,
  Divider,
  Space,
  Skeleton,
  rem,
  Title,
  Stack,
  Button,
} from "@mantine/core";
import { useEffect, useState } from "react";

const heroContent = {
  title: "Tĩnh Nguyện Hàng Ngày",
  description:
    "Tôi đã giấu lời Chúa trong lòng tôi, để tôi không phạm tội cùng Chúa. — Thi Thiên 119:11",
};

const PricingPage = () => {
  const [devotionalVideos, setDevotionVideos] = useState<devotionalVideo[]>();
  const [cardVideos, setCardVideos] = useState<cardGridRenderProps[]>();
  const [disablePagination, setDisablePagination] = useState(false);
  useEffect(() => {
    const getDevotionVideos = async () => {
      const revalidateFetchingTimeInSeconds = 86400; // 12hrs
      const response = await fetch("/api/v1/devotion", {
        next: { revalidate: revalidateFetchingTimeInSeconds },
      });
      const data: devotionalVideo[] = await response.json();
      setDevotionVideos(data.reverse());
      const formattedData: cardGridRenderProps[] = data
        .slice(1, 5)
        .map((item) => {
          return {
            title: item.title.split("|")[0],
            category: item.title.split("Ngày ")[1],
            link: `https://www.youtube.com/watch?v=${item.id}`,
            image: item.thumbnails.standard.url,
          };
        });
      setCardVideos(formattedData);
    };
    getDevotionVideos();
  }, []);

  const handlePagination = () => {
    let totalItems: number = devotionalVideos ? devotionalVideos.length - 1 : 0;
    let itemsRendered: number = cardVideos ? cardVideos.length : 0;
    let itemsToRender: number =
      totalItems - itemsRendered > 4 ? 4 : totalItems - itemsRendered;
    let start: number = itemsRendered + 1;
    let end: number = itemsRendered + itemsToRender + 1;
    console.log(
      "total: ",
      totalItems,
      "rendered: ",
      itemsRendered,
      "to render: ",
      itemsToRender,
      "start: ",
      start,
      "end:",
      end
    );

    const formattedData: cardGridRenderProps[] = devotionalVideos!
      .slice(start, end)
      .map((item) => {
        return {
          title: item.title.split("|")[0],
          category: item.title.split("Ngày ")[1],
          image: item.thumbnails.standard.url,
          link: `https://www.youtube.com/watch?v=${item.id}`,
        };
      });
    const temp = [...cardVideos!, ...formattedData];
    setCardVideos(temp);
    if (totalItems - itemsRendered <= 1) setDisablePagination(true);
  };

  const todayDate = new Date(Date.now()).toDateString();
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
        <Title order={2}>{todayDate}</Title>
        {devotionalVideos ? (
          <DevotionVideo devotionVideo={devotionalVideos[0]} />
        ) : (
          <Skeleton height={rem(300)} radius="md" animate={true} />
        )}
      </Stack>

      <Space h={"md"} />
      <Divider my={"lg"} />
      <Space h={"md"} />

      <Stack>
        <Title order={2}>Các Video Khác</Title>
        {cardVideos && <ArticlesCardsGrid data={cardVideos} />}
        <Button onClick={handlePagination} disabled={disablePagination}>
          {disablePagination ? "Hết" : " Xem thêm"}
        </Button>
      </Stack>

      {devotionalVideos?.map((i) => (
        <p>{i.title}</p>
      ))}
    </Container>
  );
};

export default PricingPage;
