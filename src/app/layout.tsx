import type { Metadata } from "next";
import "qalbplayer/style.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "QalbPlayer Full Test",
  description: "Full test app for qalbplayer video, shorts, reels and live modes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
