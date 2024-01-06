import React, { useContext } from "react";
import { SimpleGrid, Stack, Grid } from "@mantine/core";
import { useRouter } from "next/navigation";

import { ArticleCardImage } from "@/app/components/ui/card/simpleCard";
import { langContext } from "@/app/components/providers/language";

const ArticlesGrid = () => {
  const { content } = useContext(langContext); // Homepage contents
  const { heroContent, articles } = content.homepage;

  const router = useRouter();
  const handleExternalLink = (link: string) => {
    router.push(link);
  };
  return (
    <>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
        <Stack>
          <ArticleCardImage
            category={articles.categories.bibleStudy}
            title={articles.titles.bibleStudy}
            btnAction={articles.actions.bibleStudy}
            handleBtn={() => handleExternalLink(articles.links.bibleStudy)}
            bgImg={articles.backgroundImages.bibleStudy}
          />
          <ArticleCardImage
            category={articles.categories.news}
            title={articles.titles.news}
            btnAction={articles.actions.news}
            handleBtn={() => handleExternalLink(articles.links.news)}
            bgImg={articles.backgroundImages.news}
          />
        </Stack>
        <Grid gutter="md">
          <Grid.Col>
            <ArticleCardImage
              category={articles.categories.story}
              title={articles.titles.story}
              btnAction={articles.actions.story}
              handleBtn={() => handleExternalLink(articles.links.story)}
              bgImg={articles.backgroundImages.story}
            />
          </Grid.Col>

          <Grid.Col span={6}>
            <ArticleCardImage
              category={articles.categories.bible}
              title={articles.titles.bible}
              btnAction={articles.actions.bible}
              handleBtn={() => handleExternalLink(articles.links.bible)}
              bgImg={articles.backgroundImages.bible}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <ArticleCardImage
              category={articles.categories.pray}
              title={articles.titles.pray}
              btnAction={articles.actions.pray}
              handleBtn={() => handleExternalLink(articles.links.pray)}
              bgImg={articles.backgroundImages.pray}
            />
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </>
  );
};

export default ArticlesGrid;
