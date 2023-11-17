import { devotionalVideo } from "@/utils/global-types";
import {
  Title,
  Text,
  Skeleton,
  rem,
  Stack,
  Button,
  Group,
  Loader,
  Center,
  AspectRatio,
} from "@mantine/core";
import React, { useState } from "react";
import YouTube from "react-youtube";

import classes from "./devotionVideo.module.css";

type DevotionVideoProps = {
  devotionVideo: devotionalVideo | undefined;
};
const DevotionVideo: React.FC<DevotionVideoProps> = ({ devotionVideo }) => {
  const [openLineClamp, setOpenLineClamp] = useState<boolean>(false);
  return (
    <>
      {devotionVideo ? (
        <>
          <Stack align="start" justify="center">
            <Title order={3}>{devotionVideo?.title}</Title>
            <Group>
              <Text lineClamp={openLineClamp ? undefined : 3}>
                {devotionVideo?.description.split("---")[0]}
              </Text>

              <Button
                variant="outline"
                onClick={() => setOpenLineClamp(!openLineClamp)}
              >
                {openLineClamp ? "Rút gọn" : "Xem thêm..."}
              </Button>
            </Group>
          </Stack>

          <AspectRatio ratio={16 / 9} className={classes.youtubeWrapper}>
            <YouTube
              videoId={devotionVideo?.id}
              className={classes.youtubeIframe}
            />
          </AspectRatio>
        </>
      ) : (
        // <Skeleton height={rem(400)} radius="md" />
        <Center>
          <Loader color="dark" type="dots" />
        </Center>
      )}
    </>
  );
};

export default DevotionVideo;
