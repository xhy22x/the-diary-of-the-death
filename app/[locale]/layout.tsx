import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { getStaticParams } from "@/locales/server";
import Navbar from "./components/navbar";

export const metadata: Metadata = {
  title: "The Diary of the Death",
  description: "An illustrated universe and storytelling project.",
};

export function generateStaticParams() {
  return getStaticParams();
}

export default async function RootLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string; }> }>) {
  const { locale } = await params;
  return (
    <html lang={locale}>
      <body>
        <Providers locale={locale}>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
