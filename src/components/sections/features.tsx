import { BookOpen, Zap, Brain, Headphones } from "lucide-react";
import { PageContainer } from "../layout/container";

export default function FeaturesSection() {
  return (
    <PageContainer>
      <section className="w-full py-24">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font tracking-tight">
            Unlock Your Potential
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            Everything you need to read more, learn faster, and remember better.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {/* Card 1: Large Span */}
          <div className="md:col-span-2 rounded-3xl bg-accent/50 p-8 flex flex-col justify-between overflow-hidden relative group">
            <div className="z-10">
              <div className="h-12 w-12 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-primary">
                <Brain className="h-6 w-6" />
              </div>
            </div>
            <div className="z-10">
              <h3 className="text-xl font-medium font-mono mb-2">
                AI-Powered Summaries
              </h3>
              <p className="text-muted-foreground max-w-md">
                Get the essence of any book in minutes. Our advanced AI extracts
                the core ideas so you can learn without the fluff.
              </p>
            </div>
            <div className="absolute right-0 bottom-0 w-1/2 h-full bg-linear-to-l from-accent/50 to-transparent pointer-events-none" />
          </div>

          {/* Card 2 */}
          <div className="rounded-3xl bg-accent/50 p-8 flex flex-col justify-between group">
            <div className="h-12 w-12 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-primary">
              <Zap className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-medium font-mono mb-2">
                Speed Reading
              </h3>
              <p className="text-muted-foreground">
                Optimized formatting to help you read 3x faster.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-3xl bg-accent/50 p-8 flex flex-col justify-between group">
            <div className="h-12 w-12 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-primary">
              <Headphones className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-medium font-mono mb-2">
                Audio Summaries
              </h3>
              <p className="text-muted-foreground">
                Listen on the go. High-quality narration for every summary.
              </p>
            </div>
          </div>

          {/* Card 4: Large Span */}
          <div className="md:col-span-2 rounded-3xl bg-accent/50 p-8 flex flex-col justify-between overflow-hidden relative">
            <div className="z-10">
              <div className="h-12 w-12 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-primary">
                <BookOpen className="h-6 w-6" />
              </div>
            </div>
            <div className="z-10">
              <h3 className="text-xl font-medium font-mono mb-2">
                Actionable Insights
              </h3>
              <p className="text-muted-foreground max-w-md">
                Turn knowledge into action with practical takeaways and
                implementation guides for every book.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
