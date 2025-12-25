import { faMusic, faPlay, faSync } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Home ♪ Playlist" };
export default function Home() {
  return (
    <main className="flex flex-col min-h-screen p-8 md:p-16">
      <div className="text-center items-center">
        <div className="flex gap-2 items-center justify-center">
          <h1 className="font-semibold text-3xl"><FontAwesomeIcon icon={faMusic} /> Playlist</h1>
          <p className="text-lg">(by <a href="https://novatea.dev" className="bg-linear-to-br from-violet-300 to-violet-500 text-transparent bg-clip-text">nova</a>)</p>
        </div>
        <p className="italic">Move, create, and share playlists between platforms!</p>
        <div className="flex items-center justify-center gap-4 mt-2">
          <Link href={"/list"} className="p-1 px-2 bg-violet-500 rounded-lg hover:text-sky-500"><FontAwesomeIcon icon={faPlay} /> Get Started</Link>
          <Link href={"/quickswitch"} className="p-1 px-2 bg-slate-500 rounded-lg hover:text-sky-500"><FontAwesomeIcon icon={faSync} /> Quick Switch!</Link>
        </div>
      </div>
    </main>
  );
}