import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({ weight: "400" });
export const metadata: Metadata = {
  title: {
    template: "%s - Playlist",
    default: "Playlist"
  },
  description: "Playlists on any platform!",
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${quicksand.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
