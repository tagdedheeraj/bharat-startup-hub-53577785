
import { cn } from "@/lib/utils";

export interface SectionHeadingProps {
  heading: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeading({
  heading,
  description,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        centered ? "text-center mx-auto" : "text-left"
      )}
    >
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
        {heading}
      </h2>
      {description && (
        <p className="text-lg text-muted-foreground max-w-3xl">
          {description}
        </p>
      )}
    </div>
  );
}
