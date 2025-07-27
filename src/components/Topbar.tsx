'use client';

import { Menu, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar';

type TopbarProps = {
  setMobileOpen: (val: boolean) => void;
};

export default function Topbar({ setMobileOpen }: TopbarProps) {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="w-full bg-gradient-to-r from-blue-500 to-white shadow-sm px-4 py-4 flex justify-between items-center"
    >
      {/* Left side: mobile menu + title */}
      <div className="flex items-center gap-3">
        {/* Mobile Toggle Button */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="block lg:hidden"
        >
          <motion.button
            onClick={() => setMobileOpen(true)}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.1 }}
            className="p-2 rounded-full border border-black/20 shadow-md bg-white text-black transition-all duration-200 hover:bg-gray-100"
          >
            <Menu size={22} />
          </motion.button>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="text-xl font-semibold text-black"
        >
          Fonte
        </motion.h2>
      </div>

      {/* Right actions */}
      <motion.div
        initial={{ x: 10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="flex items-center gap-4"
      >
        {/* Search Icon */}
        <motion.button
          whileHover={{ scale: 1.2 }}
          className="text-black hover:text-gray-700 transition"
        >
          <Search size={20} />
        </motion.button>

        {/* Avatar */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Avatar className="w-10 h-10 border-2 border-black">
            <AvatarImage src="/user.png" alt="User" />
            <AvatarFallback>AD</AvatarFallback>
          </Avatar>
        </motion.div>
      </motion.div>
    </motion.header>
  );
}
