'use client';

import { useState } from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFileAlt,
  FaEnvelope,
  FaInfoCircle,
  FaTimes,
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function Footer() {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  const socials = [
    { id: 'GitHub', icon: FaGithub, link: 'https://github.com/sanakhuram' },
    {
      id: 'LinkedIn',
      icon: FaLinkedin,
      link: 'https://www.linkedin.com/in/sana-khuram-157ba02b7/',
    },
    {
      id: 'Instagram',
      icon: FaInstagram,
      link: 'https://www.instagram.com/sana_khuram/?igsh=MTBneHhvd2d2eXB2dg%3D%3D#',
    },
    { id: 'CV', icon: FaFileAlt, link: '/assets/CV-Sana.pdf' },
    { id: 'Email', icon: FaEnvelope, link: 'mailto:sana.khuram.baig@gmail.com' },
  ];

  return (
    <div
      className="fixed bottom-6 left-0 right-0 z-50 flex justify-between items-center px-4 sm:px-6"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background overlay */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute left-4 right-4 bottom-0 top-0 bg-black z-[-1] rounded-xl"
          />
        )}
      </AnimatePresence>

      <div className="text-red-900 text-xs sm:text-sm z-10">© 2025</div>

      <div className="flex items-center gap-2 sm:gap-3 z-10">
        {/* Info button */}
        <button
          onClick={() => setOpen(!open)}
          className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full transition-colors duration-300 hover:bg-gray-500/10"
          aria-label={open ? 'Close info' : 'Open info'}
        >
          {open ? (
            <FaTimes className="text-red-900 text-lg sm:text-xl" />
          ) : (
            <FaInfoCircle className="text-red-900 text-lg sm:text-xl" />
          )}
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.3, staggerChildren: 0.05 }}
              className="flex gap-2 sm:gap-3"
            >
              {socials.map((s) => (
                <motion.a
                  key={s.id}
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.id}
                  title={s.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                  className="h-8 w-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full hover:bg-gray-500/10 transition-transform duration-200 hover:scale-110"
                >
                  <s.icon className="text-red-900 text-base sm:text-xl" />
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
