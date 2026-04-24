"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AntiGravityLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Play animation on every mount (page reload)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  const characters = ["<", "S", "X", "D", "/", ">"];
  const premiumEasing: [number, number, number, number] = [0.22, 1, 0.36, 1];

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5, ease: "easeInOut" as const },
    },
  };

  const childVariants = {
    hidden: (i: number) => ({
      opacity: 0,
      y: i % 2 === 0 ? 50 : -50,
      x: i % 2 === 0 ? -25 : 25,
      rotateX: i % 2 === 0 ? 45 : -45,
      rotateY: i % 2 === 0 ? -20 : 20,
      rotateZ: i % 2 === 0 ? 15 : -15,
      scale: 0.8,
      z: i % 2 === 0 ? 150 : -150,
    }),
    visible: (i: number) => ({
      opacity: [0, 1, 1],
      y: [i % 2 === 0 ? 50 : -50, i % 2 === 0 ? -10 : 10, 0],
      x: [i % 2 === 0 ? -25 : 25, i % 2 === 0 ? 5 : -5, 0],
      rotateX: [i % 2 === 0 ? 45 : -45, i % 2 === 0 ? -10 : 10, 0],
      rotateY: [i % 2 === 0 ? -20 : 20, i % 2 === 0 ? 5 : -5, 0],
      rotateZ: [i % 2 === 0 ? 15 : -15, i % 2 === 0 ? -5 : 5, 0],
      scale: [0.8, 1.05, 1],
      z: [i % 2 === 0 ? 150 : -150, 0, 0],
      transition: {
        duration: 2,
        ease: premiumEasing,
        times: [0, 0.6, 1],
      },
    }),
  };

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="ag-loader"
            className="fixed inset-0 z-9999 flex items-center justify-center bg-[#020617] pointer-events-none"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{ perspective: "1000px" }}
          >
            <div className="flex space-x-1 sm:space-x-2 text-white font-bold text-6xl md:text-8xl tracking-widest drop-shadow-xl" style={{ transformStyle: "preserve-3d" }}>
              {characters.map((char, index) => (
                <motion.span
                  key={index}
                  custom={index}
                  variants={childVariants}
                  className="inline-block"
                  style={{ 
                    textShadow: "0px 10px 30px rgba(0,0,0,0.5)",
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className={
          !isMounted || isLoading
            ? "opacity-0 h-screen overflow-hidden"
            : "opacity-100 transition-opacity duration-700 ease-in-out"
        }
      >
        {children}
      </div>
    </>
  );
}
