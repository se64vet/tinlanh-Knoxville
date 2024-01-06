import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { MantineProvider, ColorSchemeScript, Space, Box } from "@mantine/core";

import { HeaderSimple } from "@/app/components/ui/header/simpleMenu";
import { FooterSimple } from "@/app/components/ui/footer/simpleFooter";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import LanguageProvider from "@/app/components/providers/language";

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
          <ToastContainer />
          <LanguageProvider>
            <Space h={"xl"} />
            <HeaderSimple />
            <Box mih="100vh">{children}</Box>
            <FooterSimple />
          </LanguageProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
