import type { ReactNode } from "react";

type PageShellProps = {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export default function PageShell({
  title,
  description,
  children,
  className = "",
}: PageShellProps) {
  return (
    <main className={`space-y-10 mx-auto max-w-6xl ${className}`}>
      <section className="space-y-4">
        <h1 className="text-3xl font-bold">{title}</h1>
        {description ? (
          <p className="text-gray-600 max-w-4xl">{description}</p>
        ) : null}
      </section>

      {children}
    </main>
  );
}
