import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1 flex flex-col overflow-y-auto">
        <div className="flex-none h-10 flex items-center p-2">
          <SidebarTrigger />
        </div>

        <div className="p-4 flex-1">{children}</div>
      </main>
    </SidebarProvider>
  );
}
