import { faSync } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen p-8 md:p-16">
      <h1 className="text-3xl font-semibold"><FontAwesomeIcon icon={faSync} /> Quick Switch</h1>
      <p>Transfer a playlist between platforms quickly!</p>
    </main>
  );
}