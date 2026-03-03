"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function Banner() {
  const sentences = [
    "Transform pages into progress with AI-powered summaries",
    "Join thousands of readers learning smarter",
    "7 days free trial - No credit card required",
    "Available on iOS and Android",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sentences.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex h-9 items-center justify-center bg-black dark:bg-secondary p-2.5 text-white dark:text-secondary-foreground">
      <AnimatePresence mode="wait">
        <motion.p
          key={currentIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="text-center text-xs leading-[1.2] uppercase"
        >
          {sentences[currentIndex]}
        </motion.p>
      </AnimatePresence>
    </section>
  );
}
