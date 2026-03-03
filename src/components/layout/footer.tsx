import { SITE_CONFIG } from "@/constants/site";
import Link from "next/link";
import { ThemeToggle } from "../ui/theme-toggle";
import { PageContainer } from "./container";

export function Footer() {
  return (
    <PageContainer>
      <footer className="flex flex-col items-center justify-between gap-10 lg:flex-row py-4">
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
          <Link href="/privacy" className="uppercase text-xs hover:underline">
            Privacy policy
          </Link>
          <span className="my-auto block size-1 rounded-full bg-black dark:bg-white" />
          <Link href="/terms" className="uppercase text-xs hover:underline">
            Terms of service
          </Link>
        </div>
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
          <p className="uppercase text-xs">
            © {new Date().getFullYear()} {SITE_CONFIG.title}. All Rights
            Reserved.
          </p>
          <span className="my-auto block size-1 rounded-full bg-black dark:bg-white" />
          <a
            href={SITE_CONFIG.twitter}
            className="uppercase hover:underline text-xs"
          >
            Follow us
          </a>
          <span className="my-auto block size-1 rounded-full bg-black dark:bg-white" />
          <ThemeToggle className="rounded-full" />
        </div>
      </footer>
    </PageContainer>
  );
}
