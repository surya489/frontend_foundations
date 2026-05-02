import Sidebar from "@/components/layout/Sidebar";
import { sidebarConfig } from "@/lib/sidebarConfig";

export default function ReactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex max-w-6xl mx-auto">
      <Sidebar items={sidebarConfig.react} />

      <div className="flex-1 p-6">{children}</div>
    </div>
  );
}