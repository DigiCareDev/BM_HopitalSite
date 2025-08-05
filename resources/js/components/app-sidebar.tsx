import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import {
    LayoutDashboard,
    Newspaper,
    Briefcase,
    Mail,
    Building2,
    HandCoins,
    Wrench,
    HeartPulse,
    Folder,
    BookOpen,
    CalendarClock,
    MessageCircle,
    Star,
    HelpCircle,
} from 'lucide-react';
import AppLogo from './app-logo';

const mainNavItems: NavItem[] = [

    {
        title: 'Dashboard',
        href: '/dashboard',
        icon: LayoutDashboard,
    },
    {
        title: 'Appointment Queries',
        href: '/appointment-manage',
        icon: CalendarClock,
    },
    {
        title: 'Blog Management',
        href: '/blog-manage',
        icon: Newspaper,
    },
    {
        title: 'Careers Management',
        href: '/career-manage',
        icon: Briefcase,
    },
    {
        title: 'Careers Queries',
        href: '/job-manage',
        icon: Briefcase,
    },
    {
        title: 'Contact Queries',
        href: '/contact-manage',
        icon: Mail,
    },
    {
        title: 'Donation Queries',
        href: '/donation-manage',
        icon: HandCoins,
    },
    {
        title: 'Donation contact Queries',
        href: '/donation-contact',
        icon: Wrench,
    },
    {
        title: 'Feedback Queries',
        href: '/feedback-manage',
        icon: Star, 
    },
     {
        title: 'Gallery',
        href: '/gallery-manage',
        icon: Star, 
    },
    {
        title: 'Other Queries',
        href: '/other-manage',
        icon: HelpCircle, 
    },
    {
        title: 'News and events',
        href: '/news-and-event-manage',
        icon: Wrench,
    },
    {
        title: 'Quick Enquiry Queries',
        href: '/quick-enquiry-manage',
        icon: MessageCircle, 
    },
];

// const footerNavItems: NavItem[] = [
//     {
//         title: 'Repository',
//         href: '/dashboard',
//         icon: Folder,
//     },
//     {
//         title: 'Documentation',
//         href: '/dashboard',
//         icon: BookOpen,
//     },
// ];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/dashboard" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                {/* <NavFooter items={footerNavItems} className="mt-auto" /> */}
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
