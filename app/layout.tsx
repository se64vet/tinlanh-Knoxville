import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { MantineProvider, ColorSchemeScript, Space, Box } from "@mantine/core";

import { HeaderSimple } from "./components/ui/header/simpleMenu";
import { FooterSimple } from "./components/ui/footer/simpleFooter";

const font = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tin Lành @Knoxville",
  description: "Hội Thánh Tin Lành Việt Nam Tại Knoxville, Tennessee",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={font.className}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>
          <Space h={"xl"} />
          <HeaderSimple />
          <Box mih="100vh">{children}</Box>
          <FooterSimple />
        </MantineProvider>
      </body>
    </html>
  );
}
