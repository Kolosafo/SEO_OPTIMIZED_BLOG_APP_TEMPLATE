import { cn } from "@/lib/utils";

type ContainerProps = React.HTMLAttributes<HTMLDivElement>;

export function PageContainer({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full h-full container px-6 md:px-14 z-10",
        className,
      )}
    >
      {children}
    </div>
  );
}
