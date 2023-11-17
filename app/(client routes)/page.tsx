"use client";

import React, { Suspense, useEffect, useState } from "react";
import YouTube from "react-youtube";
import {
  Container,
  Grid,
  SimpleGrid,
  Skeleton,
  rem,
  Stack,
  Space,
  Title,
  Text,
} from "@mantine/core";

import { GetInTouch } from "@/app/components/ui/contact-form/contactForm";
import { HeroImageBackground } from "@/app/components/ui/hero/heroWithBg";
import { devotionalVideo } from "@/utils/global-types";
import classes from "./page.module.css";
import { FadeLoader, HashLoader } from "react-spinners";

const PRIMARY_COL_HEIGHT = rem(300);

const heroContent = {
  title: "Nhóm Lại Chúa Nhật Hàng Tuần",
  description: "1:30-3:30 PM | 8000 Middle Brook Pike",
  btnAction1: "Liên Lạc Với Chúng Tôi",
};

export default function Home() {
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;
  const getInTouchRef = React.useRef<HTMLInputElement>(null);
  const [devotionVideo, setDevotionVideo] = useState<
    devotionalVideo | undefined
  >();

  const handleScrollToElement = (ref: React.RefObject<HTMLInputElement>) => {
    ref.current?.scrollIntoView({ block: "center", behavior: "smooth" });
  };

  useEffect(() => {
    const getDailyDevotionVideo = async () => {
      const response = await fetch("/api/v1/devotion");
      const data = await response.json();
      setDevotionVideo(data);
    };
    getDailyDevotionVideo();
  }, []);

  return (
    <Container my="md">
      <Stack>
        <HeroImageBackground
          title={heroContent.title}
          description={heroContent.description}
          btnAction1={heroContent.btnAction1}
          handleBtn1={() => handleScrollToElement(getInTouchRef)}
        />

        {/* <Space /> */}

        {devotionVideo ? (
          <>
            <Title>{devotionVideo?.title}</Title>
            <Text lineClamp={undefined}>
              {devotionVideo?.description.split("---")[0]}
            </Text>

            <div className={classes.youtubeWrapper}>
              <YouTube
                videoId={devotionVideo?.id}
                className={classes.youtubeIframe}
              />
            </div>
          </>
        ) : (
          <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" />
        )}

        {/* <Space /> */}

        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
          <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false} />
          <Grid gutter="md">
            <Grid.Col>
              <Skeleton
                height={SECONDARY_COL_HEIGHT}
                radius="md"
                animate={false}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <Skeleton
                height={SECONDARY_COL_HEIGHT}
                radius="md"
                animate={false}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <Skeleton
                height={SECONDARY_COL_HEIGHT}
                radius="md"
                animate={false}
              />
            </Grid.Col>
          </Grid>
        </SimpleGrid>
        <div ref={getInTouchRef}>
          <GetInTouch />
        </div>
      </Stack>
    </Container>
  );
}
