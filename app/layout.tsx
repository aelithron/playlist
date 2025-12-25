import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import { Header } from "./ui.module";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";

config.autoAddCss = false;
const quicksand = Quicksand({ weight: "400" });
export const metadata: Metadata = {
  title: {
    template: "%s ♪ Playlist",
    default: "Playlist"
  },
  description: "Playlists on any platform!",
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${quicksand.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
