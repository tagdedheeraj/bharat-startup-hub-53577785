
import { cn } from "@/lib/utils";

export interface SectionHeadingProps {
  heading: string;
  description?: string;
  centered?: boolean;
  subheading?: string;
  align?: "left" | "center" | "right";
}

export default function SectionHeading({
  heading,
  description,
  centered = false,
  subheading,
  align,
}: SectionHeadingProps) {
  // Determine alignment based on either centered or align props
  // (for backward compatibility)
  const alignment = align 
    ? align === "center" 
      ? "text-center mx-auto"
      : align === "right" 
        ? "text-right ml-auto" 
        : "text-left"
    : centered 
      ? "text-center mx-auto" 
      : "text-left";

  return (
    <div
      className={cn(
        "max-w-3xl",
        alignment
      )}
    >
      {subheading && (
        <span className="text-sm text-brand-600 font-medium uppercase tracking-wider block mb-2">
          {subheading}
        </span>
      )}
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
