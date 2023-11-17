import { Skeleton, rem } from "@mantine/core";

export default function Loading() {
  return <Skeleton height={rem(300)} radius="md" animate={true} />;
}
