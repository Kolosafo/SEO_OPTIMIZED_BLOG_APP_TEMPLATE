import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ProseProps = HTMLAttributes<HTMLElement> & {
  as?: "article";
  html: string;
};

export function Prose({ children, html, className }: ProseProps) {
  return (
    <article
      className={cn(
        "prose dark:prose-invert prose-h1:font-bold prose-h1:text-xl prose-a:text-blue-600 prose-p:text-justify prose-img:rounded-xl prose-headings:font-sans prose-headings:font-normal mx-auto",
        className,
      )}
    >
      {/** biome-ignore lint/security/noDangerouslySetInnerHtml: <> */}
      {html ? <div dangerouslySetInnerHTML={{ __html: html }} /> : children}
    </article>
  );
}
