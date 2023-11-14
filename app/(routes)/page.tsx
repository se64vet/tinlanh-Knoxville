'use client'

import { Container, Grid, SimpleGrid, Skeleton, rem, Stack, Space } from '@mantine/core';
import { CardsCarousel } from '../components/ui/carousel/cardCarousel';
import { GetInTouch } from '../components/ui/contact-form/contactForm';

const PRIMARY_COL_HEIGHT = rem(300);

export default function Home() {
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`
  return (
    <Container my="md">
      <Stack>
        <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false} />
        <Space />

        <CardsCarousel />

        <Space />
        <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false} />
        <Space />

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

        <GetInTouch />
      </Stack>
    </Container>
  );
}
