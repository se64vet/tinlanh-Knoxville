import {
  Blockquote,
  Divider,
  Image,
  Stack,
  Text,
  Title,
  TypographyStylesProvider,
} from "@mantine/core";
import { IconBookmark } from "@tabler/icons-react";
import React from "react";

const BlogPage = () => {
  return (
    <Stack>
      {/* banner image */}
      <Image radius="md" src={imgUrl} alt="banner" />

      {/* Title */}
      <Title>Messaging: What its is, why you need it</Title>

      {/* Author */}
      <Text fw={"bold"}>Lora Smith</Text>
      <Divider my={"md"} color="orange" />

      {/* Short description */}
      <Blockquote color="yellow" icon={<IconBookmark />} mt={"xl"}>
        Life is like an npm install – you never know what you are going to get.
      </Blockquote>

      {/* Main content */}
      <TypographyStylesProvider>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </TypographyStylesProvider>
    </Stack>
  );
};
export default BlogPage;

const html =
  "<h2>This is sample heading 1</h2> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><h2>This is sample heading 2</h2> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><h2>This is sample heading 3</h2><p>Pretium nibh ipsum consequat nisl vel. At tempor commodo ullamcorper a. At tempor commodo ullamcorper a lacus vestibulum sed arcu. Sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Suspendisse ultrices gravida dictum fusce. Sit amet facilisis magna etiam tempor orci. Adipiscing bibendum est ultricies integer quis auctor elit. Eu non diam phasellus vestibulum lorem sed. Convallis posuere morbi leo urna molestie at elementum eu facilisis. Bibendum arcu vitae elementum curabitur vitae nunc sed. Pulvinar elementum integer enim neque volutpat ac tincidunt vitae. Felis imperdiet proin fermentum leo vel orci porta non pulvinar. Morbi enim nunc faucibus a pellentesque sit. Elementum sagittis vitae et leo duis ut diam quam nulla. Quam nulla porttitor massa id neque aliquam vestibulum morbi. Gravida neque convallis a cras semper. Nibh sit amet commodo nulla facilisi. Tortor posuere ac ut consequat semper viverra. Platea dictumst quisque sagittis purus sit amet. Id velit ut tortor pretium viverra suspendisse potenti nullam ac.</p> <p>Pretium nibh ipsum consequat nisl vel. At tempor commodo ullamcorper a. At tempor commodo ullamcorper a lacus vestibulum sed arcu. Sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Suspendisse ultrices gravida dictum fusce. Sit amet facilisis magna etiam tempor orci. Adipiscing bibendum est ultricies integer quis auctor elit. Eu non diam phasellus vestibulum lorem sed. Convallis posuere morbi leo urna molestie at elementum eu facilisis. Bibendum arcu vitae elementum curabitur vitae nunc sed. Pulvinar elementum integer enim neque volutpat ac tincidunt vitae. Felis imperdiet proin fermentum leo vel orci porta non pulvinar. Morbi enim nunc faucibus a pellentesque sit. Elementum sagittis vitae et leo duis ut diam quam nulla. Quam nulla porttitor massa id neque aliquam vestibulum morbi. Gravida neque convallis a cras semper. Nibh sit amet commodo nulla facilisi. Tortor posuere ac ut consequat semper viverra. Platea dictumst quisque sagittis purus sit amet. Id velit ut tortor pretium viverra suspendisse potenti nullam ac.</p>";
const imgUrl =
  "https://images.unsplash.com/photo-1688920556232-321bd176d0b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80";
