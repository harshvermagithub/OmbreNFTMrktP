'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { HomeIcon, BookOpen, Users, Briefcase, NewspaperIcon, GraduationCap, LogIn, UserPlus } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const NAV_ITEMS = [
  { name: 'Internships', href: '/internships', icon: Briefcase },
  { name: 'Courses', href: '/courses', icon: BookOpen },
  { name: 'Mentorship', href: '/mentorship', icon: Users },
  { name: 'Blog', href: '/blog', icon: NewspaperIcon },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isTopHeaderHovered, setIsTopHeaderHovered] = useState(false);
  const [isBottomHeaderHovered, setIsBottomHeaderHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Header */}
      <header 
        className="fixed top-0 sm:top-4 left-0 sm:left-1/2 w-full sm:w-auto sm:-translate-x-1/2 z-50 transition-all duration-300"
        onMouseEnter={() => setIsTopHeaderHovered(true)}
        onMouseLeave={() => setIsTopHeaderHovered(false)}
      >
        <div className={cn(
          "transition-all duration-300 flex items-center justify-between sm:justify-start gap-2 p-1.5",
          "relative overflow-hidden backdrop-blur-sm",
          "border-b sm:border sm:rounded-full border-zinc-200/20 dark:border-zinc-800/20",
          isTopHeaderHovered 
            ? [
                "shadow-lg shadow-primary/10",
                "bg-background/90",
                "backdrop-blur-md",
                "border-zinc-200/30 dark:border-zinc-800/30"
              ].join(" ")
            : scrolled 
              ? [
                  "bg-background/80",
                  "backdrop-blur-sm",
                  "shadow-sm"
                ].join(" ")
              : "bg-background/70"
        )}>
          <nav className="flex items-center h-10 px-1 gap-1 overflow-x-auto scrollbar-none">
            <Link 
              href="/"
              className={cn(
                "px-3 sm:px-4 py-2 rounded-full transition-all duration-300 relative group flex items-center gap-2 shrink-0",
                "hover:shadow-sm hover:bg-background/30 hover:backdrop-blur-md",
                pathname === '/' 
                  ? 'text-primary bg-background/30 font-medium shadow-sm backdrop-blur-md' 
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              <HomeIcon className="h-4 w-4 transition-transform group-hover:scale-110" />
              <span className="relative z-10 font-medium text-sm sm:text-base">Home</span>
              {pathname === '/' && (
                <span className="absolute inset-0 rounded-full bg-primary/5 animate-pulse" />
              )}
            </Link>

            {NAV_ITEMS.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "px-3 sm:px-4 py-2 rounded-full transition-all duration-300 relative group flex items-center gap-2 shrink-0",
                  "hover:shadow-sm hover:bg-background/30 hover:backdrop-blur-md",
                  pathname === item.href
                    ? 'text-primary bg-background/30 font-medium shadow-sm backdrop-blur-md' 
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                <item.icon className="h-4 w-4 transition-transform group-hover:scale-110" />
                <span className="relative z-10 font-medium text-sm sm:text-base">{item.name}</span>
                {pathname === item.href && (
                  <span className="absolute inset-0 rounded-full bg-primary/5 animate-pulse" />
                )}
              </Link>
            ))}
          </nav>

          <div className="h-6 w-px bg-zinc-200/20 dark:bg-zinc-800/20" aria-hidden="true" />

          <div className="flex items-center gap-1 pl-1">
            <Link 
              href="/signin" 
              className="p-2.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-background/30 transition-all duration-300 relative group hover:shadow-sm hover:backdrop-blur-md"
              onMouseEnter={() => setHoveredItem('signin')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <LogIn className="h-4 w-4 transition-transform group-hover:scale-110" />
              {hoveredItem === 'signin' && (
                <span className="absolute -bottom-9 left-1/2 -translate-x-1/2 px-2 py-1 bg-background/30 backdrop-blur-xl rounded-md text-xs whitespace-nowrap shadow-sm border border-zinc-200/20 dark:border-zinc-800/20">
                  Sign in
                </span>
              )}
            </Link>
            <Link 
              href="/signup"
              className="p-2.5 rounded-full bg-primary/90 text-primary-foreground hover:bg-primary/80 transition-all duration-300 relative group hover:shadow-sm"
              onMouseEnter={() => setHoveredItem('signup')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <UserPlus className="h-4 w-4 transition-transform group-hover:scale-110" />
              {hoveredItem === 'signup' && (
                <span className="absolute -bottom-9 left-1/2 -translate-x-1/2 px-2 py-1 bg-background/30 backdrop-blur-xl rounded-md text-xs whitespace-nowrap shadow-sm border border-zinc-200/20 dark:border-zinc-800/20">
                  Sign up
                </span>
              )}
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Bottom Dock */}
      <div 
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 hover:scale-[1.02]"
        onMouseEnter={() => setIsBottomHeaderHovered(true)}
        onMouseLeave={() => setIsBottomHeaderHovered(false)}
      >
        <div className={cn(
          "rounded-full transition-all duration-300 p-1.5 flex items-center gap-1",
          "relative overflow-hidden backdrop-blur-sm",
          "border border-zinc-200/20 dark:border-zinc-800/20",
          isBottomHeaderHovered 
            ? [
                "shadow-lg shadow-primary/10",
                "bg-background/30",
                "backdrop-blur-md",
                "border-zinc-200/30 dark:border-zinc-800/30"
              ].join(" ")
            : [
                "bg-background/20",
                "backdrop-blur-sm",
                "shadow-sm"
              ].join(" ")
        )}>
          <Link 
            href="/"
            className={cn(
              "p-3 rounded-full transition-all duration-300 flex flex-col items-center gap-1 relative group",
              "hover:shadow-sm hover:bg-background/30 hover:backdrop-blur-md",
              pathname === '/' 
                ? 'text-primary bg-background/30 shadow-sm backdrop-blur-md' 
                : 'text-muted-foreground hover:text-foreground'
            )}
          >
            <HomeIcon className="h-5 w-5 transition-transform group-hover:scale-110" />
            <span className="text-[10px] font-medium transition-all group-hover:text-primary">Home</span>
            {pathname === '/' && (
              <span className="absolute inset-0 rounded-full bg-primary/5 animate-pulse" />
            )}
          </Link>

          {NAV_ITEMS.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "p-3 rounded-full transition-all duration-300 flex flex-col items-center gap-1 relative group",
                "hover:shadow-sm hover:bg-background/30 hover:backdrop-blur-md",
                pathname === item.href
                  ? 'text-primary bg-background/30 shadow-sm backdrop-blur-md' 
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              <item.icon className="h-5 w-5 transition-transform group-hover:scale-110" />
              <span className="text-[10px] font-medium transition-all group-hover:text-primary">{item.name}</span>
              {pathname === item.href && (
                <span className="absolute inset-0 rounded-full bg-primary/5 animate-pulse" />
              )}
            </Link>
          ))}

          <div className="h-12 flex items-center">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </>
  );
} 