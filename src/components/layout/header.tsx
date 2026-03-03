import Link from "next/link";
import { PageContainer } from "./container";
import { Button } from "../ui/button";
import { DownloadModal } from "../download-modal";
import { SITE_CONFIG } from "@/constants/site";

export function Header() {
  return (
    <header className="py-4 sticky top-0 z-50 bg-background/80 backdrop-blur-md">
      <PageContainer>
        <nav className="flex items-center justify-between">
          <Link href="/">
            <p className="font-semibold text-xl font-mono">
              {SITE_CONFIG.title}
            </p>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/about"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              About
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Blog
            </Link>
            <Link
              href="/pricing"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Pricing
            </Link>
            <Link
              href="/help"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Support
            </Link>
          </div>

          <Button className="md:hidden rounded-full">Get the app</Button>
          <div className="max-md:hidden">
            <DownloadModal />
          </div>
        </nav>
      </PageContainer>
    </header>
  );
}
