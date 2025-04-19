"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check } from "lucide-react";
import { useEffect, useState } from "react";

interface LessonCardProps {
  id: string;
  themeId: string;
  title: string;
  description: string;
}

export function LessonCard({ id, themeId, title, description }: LessonCardProps) {
  const [isWatched, setIsWatched] = useState(false);

  useEffect(() => {
    const watchedLessons = JSON.parse(localStorage.getItem('watchedLessons') || '[]');
    setIsWatched(watchedLessons.includes(id));
  }, [id]);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="relative"
    >
      <Link 
        href={`/theme/${themeId}/lesson/${id}`}
        className="lesson-card block relative"
        role="button"
        aria-label={`Acessar aula: ${title}`}
      >
        <article className="pr-12">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </article>
        
        {isWatched && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            <span className="bg-green-500 text-white p-2 rounded-full">
              <Check size={20} />
            </span>
          </div>
        )}
      </Link>
    </motion.div>
  );
}