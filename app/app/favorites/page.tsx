"use client";

import { useEffect, useState } from "react";
import { themes } from "@/lib/data";
import { LessonCard } from "@/components/ui/lesson-card";
import Link from "next/link";

export default function FavoritesPage() {
  const [favoriteLessons, setFavoriteLessons] = useState<any[]>([]);

  useEffect(() => {
    const favoriteIds = JSON.parse(localStorage.getItem('favoriteLessons') || '[]');
    const favorites = themes.flatMap(theme =>
      theme.lessons.filter(lesson => favoriteIds.includes(lesson.id))
    );
    setFavoriteLessons(favorites);
  }, []);

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="main-heading">Minhas Aulas Favoritas</h1>

      {favoriteLessons.length === 0 ? (
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-4">
            Você ainda não tem aulas favoritas.
          </p>
          <Link
            href="/"
            className="button-large bg-blue-600 text-white hover:bg-blue-700"
          >
            Explorar aulas
          </Link>
        </div>
      ) : (
        <div className="grid gap-4">
          {favoriteLessons.map((lesson) => (
            <LessonCard
              key={lesson.id}
              id={lesson.id}
              themeId={lesson.themeId}
              title={lesson.title}
              description={lesson.description}
            />
          ))}
        </div>
      )}
    </main>
  );
}