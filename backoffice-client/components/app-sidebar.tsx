import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import type { ComponentType } from "react";
import { type LucideProps, MessageCircleQuestionIcon } from "lucide-react";
import Link from "next/link";

interface SidebarItem {
  href: string;
  label: string;
  icon: ComponentType<LucideProps>;
}

interface SidebarGroupItem {
  label: string;
  children: SidebarItem[];
}

const sidebarGroups: SidebarGroupItem[] = [
  {
    label: "Content Management",
    children: [
      {
        href: "/questions",
        label: "Questions",
        icon: MessageCircleQuestionIcon,
      },
    ],
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        {sidebarGroups.map((group, index) => (
          <SidebarGroup key={index}>
            <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.children.map((item, itemIndex) => (
                  <SidebarMenuItem key={index}>
                    <SidebarMenuButton asChild>
                      <Link href={item.href}>
                        <item.icon />
                        <span>{item.label}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
