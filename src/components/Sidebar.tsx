'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home,
  Calendar,
  Briefcase,
  Users,
  Settings,
  BarChart3,
  ChevronRight,
  ChevronLeft,
  X,
} from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navItems = [
  { icon: Home, label: 'Dashboard', path: '/dashboard' },
  { icon: Briefcase, label: 'Sales', path: '/sales' },
  { icon: BarChart3, label: 'Commissions', path: '/commissions' },
  { icon: Users, label: 'Sellers', path: '/sellers' },
  { icon: Calendar, label: 'Payouts', path: '/payouts' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

type SidebarProps = {
  mobileOpen: boolean;
  setMobileOpen: (val: boolean) => void;
};

export default function Sidebar({ mobileOpen, setMobileOpen }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(true);

  // Desktop Sidebar
  const DesktopSidebar = (
    <motion.aside
      animate={{ width: isOpen ? 240 : 80 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="hidden lg:flex h-screen bg-gradient-to-b from-blue-500 to-white text-black shadow-xl flex-col px-3 py-6 relative"
    >
      {/* Toggle Button */}
      <Button
        variant="outline"
        size="icon"
        onClick={() => setIsOpen((prev) => !prev)}
        className="absolute -right-3 top-6 w-6 h-6 rounded-full p-0 bg-white text-black border border-gray-300 shadow"
      >
        {isOpen ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
      </Button>

      {/* Logo */}
      <div className={cn('flex justify-center mb-8', isOpen ? 'w-full' : 'w-10 mx-auto')}>
        <div
          className={cn(
            'bg-black rounded-xl p-2 shadow-md flex items-center justify-center transition-all',
            isOpen ? 'w-44 h-14' : 'w-12 h-12'
          )}
        >
          <div className={cn('relative', isOpen ? 'w-40 h-10' : 'w-8 h-8')}>
            <Image
              src={isOpen ? '/color_logo_no_bg_full.png' : '/color_logo_no_bg.png'}
              alt="Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Nav Items */}
      <nav className="flex flex-col space-y-2">
        {navItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <Link key={idx} href={item.path}>
              <motion.div
                className={cn(
                  'flex items-center gap-4 px-4 py-2 rounded-xl font-medium transition-all cursor-pointer',
                  isOpen
                    ? 'bg-black text-white hover:bg-white hover:text-black'
                    : 'justify-center bg-black text-white hover:bg-white hover:text-black'
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={20} />
                {isOpen && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-sm"
                  >
                    {item.label}
                  </motion.span>
                )}
              </motion.div>
            </Link>
          );
        })}
      </nav>
    </motion.aside>
  );

  // Mobile Drawer
  const MobileDrawer = (
    <AnimatePresence>
      {mobileOpen && (
        <>
          {/* Drawer Panel */}
          <motion.aside
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 left-0 z-50 h-full w-72 max-w-[100%] bg-gradient-to-b from-blue-500 to-white text-black shadow-2xl border-r border-gray-200 p-4 flex flex-col space-y-4 lg:hidden"
          >
            {/* Close Button */}
            <div className="flex justify-end">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
              >
                <Button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-full border border-black/20 shadow bg-white hover:bg-gray-100 transition-all"
                  size="icon"
                >
                  <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }}>
                    <X size={20} className="text-black" />
                  </motion.div>
                </Button>
              </motion.div>
            </div>

            {/* Logo */}
            <div className="flex justify-center mb-6">
              <div className="bg-black rounded-xl p-2 shadow-md flex items-center justify-center w-40 h-12 relative">
                <Image
                  src="/color_logo_no_bg_full.png"
                  alt="Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Nav Items */}
            <nav className="flex flex-col space-y-2">
              {navItems.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <Link key={idx} href={item.path} onClick={() => setMobileOpen(false)}>
                    <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-black text-white hover:bg-white hover:text-black transition">
                      <Icon size={20} />
                      <span className="text-sm">{item.label}</span>
                    </div>
                  </Link>
                );
              })}
            </nav>
          </motion.aside>

          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black"
            onClick={() => setMobileOpen(false)}
          />
        </>
      )}
    </AnimatePresence>
  );

  return (
    <>
      {DesktopSidebar}
      {MobileDrawer}
    </>
  );
}
