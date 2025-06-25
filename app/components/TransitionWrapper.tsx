// components/TransitionWrapper.tsx
"use client";
import { motion } from 'framer-motion';
import React, { ReactNode } from 'react';

interface TransitionWrapperProps {
  children: ReactNode;
}
/**
 * TransitionWrapper component
 * Wraps pages with transition animations
 * @param {TransitionWrapperProps} { children } - Props for the component
 * @returns {JSX.Element} - The TransitionWrapper component
 */
const TransitionWrapper: React.FC<TransitionWrapperProps> = ({ children }) => {
  const pageVariants = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeInOut" } },
    exit: { opacity: 0, x: 100, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ type: 'tween', staggerChildren: 0.1 }}
    >
      {children}
    </motion.div>
  );
};

export default TransitionWrapper;
