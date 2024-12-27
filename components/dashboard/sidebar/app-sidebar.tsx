"use client"
import React from 'react';

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";


import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar";


import {
  BookOpen,
  Bot,
  ChevronRight,
  Settings2,
  SquareTerminal,
} from "lucide-react";
import Logo from '@/components/logo';

;

const AppSidebar = () => {

  const user = {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  };

  const navMain = [
    {
      title: "Dashboard",
      url: "/dashbaord",
      icons: SquareTerminal,
      isActive: true,
      items:[
        {
          title: "Overview",
          url: "#",
        },
      ]
    },
    {
      title: "Student Management",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Student directory",
          url: "#",
        },
        {
          title: "Enrollment",
          url: "#",
        },
        {
          title: "Attendance",
          url: "#",
        },
        {
          title: "Performance",
          url: "#",
        },
      ],
    },
    {
      title: "Academics",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Curriculum",
          url: "#",
        },
        {
          title: "Timetable",
          url: "#",
        },
        {
          title: "Examinations",
          url: "#",
        },
        {
          title: "Assignments",
          url: "#",
        },
        {
          title: "Report Cards",
          url: "#",
        },
      ],
    },
    {
      title: "Staff Management",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Staff Directory",
          url: "#",
        },
        {
          title: "Attendace",
          url: "#",
        },
        {
          title: "Leave Management",
          url: "#",
        },
        {
          title: "Performance",
          url: "#",
        },
      ],
    },
    {
      title: "Communication",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Messages",
          url: "#",
        },
        {
          title: "Announcements",
          url: "#",
        },
        {
          title: "Notice Board",
          url: "#",
        },
        {
          title: "Emergency Alerts",
          url: "#",
        },
      ],
    },
    {
      title: "Finance",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Fee Management",
          url: "#",
        },
        {
          title: "Payments",
          url: "#",
        },
        {
          title: "Scholarships",
          url: "#",
        },
        {
          title: "Reports",
          url: "#",
        },
      ],
    },
    {
      title: "Transport",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Routes",
          url: "#",
        },
        {
          title: "Tracking",
          url: "#",
        },
        {
          title: "Drivers",
          url: "#",
        },
        {
          title: "Maintenance",
          url: "#",
        },
      ],
    },
    {
      title: "Resources",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Library",
          url: "#",
        },
        {
          title: "Invent",
          url: "#",
        },
        {
          title: "Facilities",
          url: "#",
        },
        {
          title: "Assets",
          url: "#",
        },
      ],
    },
    {
      title: "Reports & Analytics",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Academic Reports",
          url: "#",
        },
        {
          title: "Financial Reports",
          url: "#",
        },
        {
          title: "Custom Reports",
          url: "#",
        },
        {
          title: "Analytics Dashboard",
          url: "#",
        },
      ],
    },
    {
      title: "Setting",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "School Profile",
          url: "#",
        },
        {
          title: "User Management",
          url: "#",
        },
        {
          title: "System Settings",
          url: "#",
        },
        {
          title: "Backup & Security",
          url: "#",
        },
      ],
    },
  ]

  return (
    <div>
      <Sidebar collapsible="icon">
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <Logo />
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarMenu>
              {navMain.map((item) => (
                <Collapsible
                  key={item.title}
                  asChild
                  defaultOpen={item.isActive}
                  className="group/collapsible"
                >
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton tooltip={item.title}>
                        {item.icon && <item.icon />}
                        <span>{item.title}</span>
                        <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items?.map((subItem) => (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton asChild>
                              <a href={subItem.url}>
                                <span>{subItem.title}</span>
                              </a>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>

        <SidebarRail />
      </Sidebar>
    </div>
  );
};

export default AppSidebar;