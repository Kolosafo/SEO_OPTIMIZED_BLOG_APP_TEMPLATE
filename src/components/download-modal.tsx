import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import forestImage from "@/assets/forest.webp";
import oceanImage from "@/assets/ocean.webp";
import { Apple } from "./icons/apple";
import { Android } from "./icons/android";
import { LINKS } from "@/constants/links";

export function DownloadModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="rounded-full">Get the app</Button>
      </DialogTrigger>
      <DialogContent
        showCloseButton={false}
        className="md:max-w-[700px] md:min-h-[500px] border-none p-2 rounded-3xl"
      >
        <DialogHeader className="sr-only">
          <DialogTitle>Download Bookflow</DialogTitle>
          <DialogDescription>
            Download Bookflow on iOS or Android to start your reading journey.
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-2">
          {/* App Store Link */}
          <Link
            href={LINKS.apple}
            className="group relative overflow-hidden rounded-xl h-full bg-zinc-900 transition-all duration-300 hover:shadow-2xl"
          >
            <div className="absolute inset-0">
              <Image
                src={forestImage}
                alt="Forest painting"
                fill
                className="object-cover object-center opacity-70 transition-opacity duration-300 group-hover:opacity-90"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col items-center gap-3">
              <Apple className="w-8 h-8 text-white" />
              <span className="text-white font-medium text-lg">App Store</span>
            </div>
          </Link>

          {/* Play Store Link */}
          <Link
            href={LINKS.android}
            className="group relative overflow-hidden rounded-xl h-full bg-zinc-900 transition-all duration-300 hover:shadow-2xl"
          >
            <div className="absolute inset-0">
              <Image
                src={oceanImage}
                alt="Ocean painting"
                fill
                className="object-cover object-center opacity-70 transition-opacity duration-300 group-hover:opacity-90"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col items-center gap-3">
              <Android className="w-8 h-8" />
              <span className="text-white font-medium text-lg">Play Store</span>
            </div>
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
}
