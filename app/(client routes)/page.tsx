"use client";

import React, { useContext, useEffect, useState } from "react";
import { Container, Stack, Space, Divider, Text, Box } from "@mantine/core";

import { GetInTouch } from "@/app/components/ui/contact-form/contactForm";
import { HeroImageBackground } from "@/app/components/ui/hero/heroWithBg";
import ArticlesGrid from "@/app/components/one-time-use/homeArticlesGrid";
import DevotionVideo from "@/app/components/ui/video-frame/devotionVideo";
import { devotionalVideo } from "@/utils/global-types";
import { langContext } from "@/app/components/providers/language";

export default function Home() {
  // State, hooks declarations
  const getInTouchRef = React.useRef<HTMLInputElement>(null);
  const [devotionVideo, setDevotionVideo] = useState<
    devotionalVideo | undefined
  >();
  const { content } = useContext(langContext); // Homepage contents
  const { heroContent } = content.homepage;

  // Handle event functions
  const handleScrollToElement = (ref: React.RefObject<HTMLInputElement>) => {
    ref.current?.scrollIntoView({ block: "center", behavior: "smooth" });
  };

  // fetching devotion videos
  useEffect(() => {
    const getDailyDevotionVideo = async () => {
      const response = await fetch("/api/v1/devotion", {});
      const data: devotionalVideo[] = await response.json();
      setDevotionVideo(data.pop());
    };
    getDailyDevotionVideo();
  }, []);

  return (
    <Container my="md">
      <Stack>
        {/* Intro Billboard */}
        <HeroImageBackground
          title={heroContent.title}
          bgImg={heroContent.background}
          btnAction1={heroContent.btnAction1}
          handleBtn1={() => handleScrollToElement(getInTouchRef)}
        >
          <Box c={"white"} ta={"center"} td={"none"}>
            <Text>{heroContent.serviceHours}</Text>
            <Text>{heroContent.location}</Text>
            <Text>{heroContent.contactNumber}</Text>
          </Box>
        </HeroImageBackground>

        {/* Devotion Section */}
        <Space />
        <Divider h={"md"} />
        <DevotionVideo devotionVideo={devotionVideo} />

        {/* News & Post Section */}
        <Space />
        <Divider h={"md"} />
        <ArticlesGrid />

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
