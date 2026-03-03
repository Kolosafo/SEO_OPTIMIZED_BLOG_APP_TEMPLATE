import { Button } from "../ui/button";
import { PageContainer } from "../layout/container";
import { Apple } from "../icons/apple";
import { Android } from "../icons/android";
import { LINKS } from "@/constants/links";

export default function CtaSection() {
  return (
    <section className="py-24">
      <PageContainer>
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="text-center flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight max-w-3xl">
              Ready to unlock knowledge faster?
            </h2>
            <p className="text-lg mt-4 text-muted-foreground max-w-2xl">
              Join thousands of readers who are learning smarter with BookFlow.
            </p>
          </div>
          <div className="grid grid-cols-1 min-w-[300px] sm:min-w-[500px] sm:grid-cols-2 gap-4 mt-4">
            <Button
              asChild
              className="h-12 px-8 rounded-full transition duration-300"
            >
              <a href={LINKS.apple} target="_blank" rel="noopener noreferrer">
                <Apple />
                <span className="ml-2">Download on iOS</span>
              </a>
            </Button>
            <Button
              asChild
              variant="ghost"
              className="w-full sm:w-auto h-12 px-8 rounded-full bg-accent hover:bg-accent/50 text-accent-foreground transition duration-300"
            >
              <a href={LINKS.android} target="_blank" rel="noopener noreferrer">
                <Android className="size-5" />
                <span className="ml-2">Download on Android</span>
              </a>
            </Button>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
