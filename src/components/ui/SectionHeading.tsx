import { cn } from "../../lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  className,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-12", centered && "text-center", className)}>
      <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-600 max-w-2xl text-lg mx-auto">{subtitle}</p>
      )}
      <div
        className={cn(
          "h-1 w-20 bg-secondary mt-6 rounded-full",
          centered && "mx-auto",
        )}
      />
    </div>
  );
}
