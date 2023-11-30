"use client";

import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  SimpleGrid,
  rem,
  Stack,
  Space,
  Divider,
  Title,
  Text,
} from "@mantine/core";

import { GetInTouch } from "@/app/components/ui/contact-form/contactForm";
import { HeroImageBackground } from "@/app/components/ui/hero/heroWithBg";
import { devotionalVideo } from "@/utils/global-types";
import DevotionVideo from "../components/ui/video-frame/devotionVideo";
import { ArticleCardImage } from "../components/ui/card/simpleCard";
import { useRouter } from "next/navigation";

const PRIMARY_COL_HEIGHT = rem(300);

const heroContent = {
  title: "Hội Thánh Tin Lành Việt Nam Tại Knoxville",
  description: "|  | ",
  btnAction1: "Liên Lạc Với Chúng Tôi",
};

const homeLinks = {
  BibleStudyUrl:
    "https://www.youtube.com/watch?v=y_L0EdwDxg0&ab_channel=H%E1%BB%99iTh%C3%A1nhTinL%C3%A0nhNg%C6%B0%E1%BB%9DiVi%E1%BB%87tVancouver",
  story:
    "https://oneway.vn/tin-tuc/quen-di-nhung-dieu-khong-dep-hom-qua-50736.html",
  pray: "/pray",
  bible: "https://kinhthanh.httlvn.org/?v=NVB",
};

const homeBackgroundImages = {
  hero: "https://images.unsplash.com/photo-1591664595578-1d0fb0b50e03?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  bible:
    "https://images.unsplash.com/photo-1604881745783-8433d5779aca?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  pray: "https://images.unsplash.com/photo-1575073776525-2cb8b4bd3f0d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  story:
    "https://images.unsplash.com/photo-1524088484081-4ca7e08e3e19?q=80&w=1582&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};
export default function Home() {
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;
  const getInTouchRef = React.useRef<HTMLInputElement>(null);
  const [devotionVideo, setDevotionVideo] = useState<
    devotionalVideo | undefined
  >();
  const router = useRouter();

  const handleScrollToElement = (ref: React.RefObject<HTMLInputElement>) => {
    ref.current?.scrollIntoView({ block: "center", behavior: "smooth" });
  };

  const handleExternalLink = (link: string) => {
    router.push(link);
  };

  useEffect(() => {
    const getDailyDevotionVideo = async () => {
      const revalidateFetchingTimeInSeconds = 86400; // 12hrs
      const response = await fetch("/api/v1/devotion", {
        next: { revalidate: revalidateFetchingTimeInSeconds },
      });
      const data: devotionalVideo[] = await response.json();
      setDevotionVideo(data.pop());
      setInterval(() => console.log(data), 3000);
    };
    getDailyDevotionVideo();
  }, []);

  return (
    <Container my="md">
      <Stack>
        {/* Intro Billboard */}
        <HeroImageBackground
          title={heroContent.title}
          bgImg={homeBackgroundImages.hero}
          btnAction1={heroContent.btnAction1}
          handleBtn1={() => handleScrollToElement(getInTouchRef)}
        >
          <Text c={"white"} ta={"center"}>
            Nhóm lại hàng tuần 1:30-3:30 PM{" "}
          </Text>
          <Text c={"white"} ta={"center"}>
            8000 Middle Brook Pike
          </Text>
          <Text c={"white"} ta={"center"}>
            {"+1 (865)-591-2605"}
          </Text>
        </HeroImageBackground>

        {/* Devotion Section */}
        <Space />
        <Divider h={"md"} />
        <DevotionVideo devotionVideo={devotionVideo} />

        {/* News & Post Section */}
        <Space />
        <Divider h={"md"} />
        <Title order={3}>Thông Báo | Tin Tức</Title>
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
          <ArticleCardImage
            category="tìm hiểu Kinh Thánh"
            title="Sáng Thế Ký"
            btnAction="Xem Thêm"
            handleBtn={() => handleExternalLink(homeLinks.BibleStudyUrl)}
          />
          <Grid gutter="md">
            <Grid.Col>
              <ArticleCardImage
                category="Câu Chuyện Thánh Kinh"
                title="Quên đi những điều không đẹp hôm qua"
                btnAction="Đọc"
                handleBtn={() => handleExternalLink(homeLinks.story)}
                bgImg={homeBackgroundImages.story}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <ArticleCardImage
                category="tìm hiểu Kinh Thánh"
                title="Kinh Thánh"
                btnAction="Đọc"
                handleBtn={() => handleExternalLink(homeLinks.bible)}
                bgImg={homeBackgroundImages.bible}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <ArticleCardImage
                category="Cầu nguyện mỗi ngày"
                title="Cầu Thay"
                btnAction="Xem nan đề"
                handleBtn={() => handleExternalLink(homeLinks.pray)}
                bgImg={homeBackgroundImages.pray}
              />
            </Grid.Col>
          </Grid>
        </SimpleGrid>

        {/* Contact Form  */}
        <Space />
        <Divider h={"md"} />
        <div ref={getInTouchRef}>
          <GetInTouch />
        </div>
      </Stack>
    </Container>
  );
}
