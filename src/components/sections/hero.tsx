import { PageContainer } from "../layout/container";
import Phone from "../ui/phone";
import { Button } from "../ui/button";
import { Android } from "../icons/android";
import { Apple } from "../icons/apple";
import { LINKS } from "@/constants/links";
import { SITE_CONFIG } from "@/constants/site";

function HeroSection() {
  return (
    <PageContainer>
      <section className="w-full pt-12 md:pt-20 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-1 lg:order-1">
            <h1 className="text-3xl md:text-5xl tracking-tight text-primary font-sans">
              {SITE_CONFIG.heroTitle}
            </h1>

            {/* Mobile Phone Position: Title -> Phone -> Subtitle */}
            <div className="lg:hidden my-8 transform scale-90">
              <Phone />
            </div>

            <p className="mt-6 sm:text-lg font-mono text-muted-foreground max-w-lg">
              {SITE_CONFIG.heroSubtitle}
            </p>

            <div className="grid grid-cols-1 md:w-full md:grid-cols-2 gap-4 mt-8 min-w-[300px]">
              <Button
                asChild
                className="w-full sm:w-auto h-12 px-8 rounded-full bg-black text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 transition duration-300"
              >
                <a href={LINKS.apple} target="_blank" rel="noopener noreferrer">
                  <Apple />
                  <span className="ml-2">Download on iOS</span>
                </a>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="w-full sm:w-auto h-12 px-8 rounded-full bg-accent text-accent-foreground hover:bg-accent/50 transition duration-300"
              >
                <a
                  href={LINKS.android}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Android className="size-5" />
                  <span className="ml-2">Download on Android</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Desktop Phone */}
          <div className="hidden lg:flex justify-end items-center order-2">
            <Phone />
          </div>
        </div>
      </section>
    </PageContainer>
  );
}

export default HeroSection;
