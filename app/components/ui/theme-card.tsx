"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface ThemeCardProps {
  id: string;
  title: string;
  description: string;
  color: string;
}

export function ThemeCard({ id, title, description, color }: ThemeCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="h-full"
    >
      <Link 
        href={`/theme/${id}`}
        className={`theme-card ${color} block h-full`}
        role="button"
        aria-label={`Acessar tema: ${title}`}
      >
        <article>
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <p className="text-lg">{description}</p>
        </article>
      </Link>
    </motion.div>
  );
}