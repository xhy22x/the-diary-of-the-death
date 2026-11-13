import type { Metadata } from "next";
import "./globals.css";
import { Suspense } from "react";
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
          <Suspense fallback={<p>Loading...</p>}>
            <Navbar />
            {children}
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}
