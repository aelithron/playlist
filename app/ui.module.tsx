import { faList, faMusic, faSync } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex flex-col md:flex-row items-center md:justify-between gap-2 p-2 md:px-4 bg-slate-300/50 dark:bg-slate-800/50">
      <Link href={"/"} className="hover:text-sky-500 font-semibold text-xl items-center"><FontAwesomeIcon icon={faMusic} size="lg" /> Playlist</Link>
      <div className="flex gap-4">
        <Link href={"/list"} className="hover:text-sky-500"><FontAwesomeIcon icon={faList} /> Playlists</Link>
        <Link href={"/quickswitch"} className="hover:text-sky-500"><FontAwesomeIcon icon={faSync} /> Quick Switch</Link>
      </div>
    </header>
  )
}