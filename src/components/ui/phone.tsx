import { cn } from "@/lib/utils";
import Image from "next/image";
import type { HTMLAttributes } from "react";
import PhoneImage from "@/assets/iPhone.png";

import libraryImage from "@/assets/library.png";

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  url?: string;
}

function Phone({ className, url, ...props }: PhoneProps) {
  return (
    <div
      className={cn(
        "relative z-50 h-[562px] w-[275px] shrink-0 overflow-hidden",
        className,
      )}
      {...props}
    >
      <Image
        src={PhoneImage}
        alt="phone"
        width={1000}
        loading="eager"
        height={1000}
        className="pointer-events-none z-20 size-full object-contain select-none"
      />
      {/* Content area positioned to fit inside the phone screen */}
      <div className="absolute top-[14px] right-[14px] bottom-[14px] left-[14px] z-[-1] overflow-hidden rounded-[38px]">
        <div className="grid h-full w-full overflow-hidden bg-white">
          {/* Background section */}
          <section
            className="relative bg-cover h-full bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${libraryImage.src})` }}
          >
            {/* <div className="absolute inset-x-0 bottom-0 z-1 h-3/5 bg-linear-to-t from-white from-5% to-transparent" /> */}
          </section>
        </div>
      </div>
    </div>
  );
}

export default Phone;
