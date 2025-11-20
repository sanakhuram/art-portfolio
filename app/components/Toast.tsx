'use client';

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Toast({ show, onClose }: { show: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
        >
          <div className="relative bg-linen text-royal px-6 py-4 rounded-lg border-2 border-dashed border-sage shadow-md max-w-sm">

            {/* butterfly decor */}
            <Image
              src="/images/butterfly/3.png"
              alt="Butterfly"
              width={50}
              height={50}
              className="absolute top-4 -right-4 opacity-90"
            />

            <p className="font-light leading-relaxed">
              Your message has been sealed in gold leaf  
              and carried on a tiny painted wing. 🦋✨
            </p>

            <button
              onClick={onClose}
              className="mt-3 text-sm underline text-royal"
            >
              Close
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
