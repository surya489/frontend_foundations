import type { ReactNode } from "react";

type SectionProps = {
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
};

export default function Section({
  title,
  description,
  children,
  className = "",
}: SectionProps) {
  return (
    <section className={`space-y-4 ${className}`}>
      <h2 className="text-xl font-semibold">{title}</h2>
      {description ? (
        <p className="text-gray-600 mt-2">{description}</p>
      ) : null}
      {children}
    </section>
  );
}
