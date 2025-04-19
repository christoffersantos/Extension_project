"use client";

import { useState, useEffect } from "react";
import { Heart, Check } from "lucide-react";

interface VideoPlayerProps {
  lessonId: string;
  videoUrl: string;
  title: string;
}

export function VideoPlayer({ lessonId, videoUrl, title }: VideoPlayerProps) {
  const [isWatched, setIsWatched] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const watchedLessons = JSON.parse(localStorage.getItem('watchedLessons') || '[]');
    const favoriteLessons = JSON.parse(localStorage.getItem('favoriteLessons') || '[]');
    
    setIsWatched(watchedLessons.includes(lessonId));
    setIsFavorite(favoriteLessons.includes(lessonId));
  }, [lessonId]);

  const toggleWatched = () => {
    const watchedLessons = JSON.parse(localStorage.getItem('watchedLessons') || '[]');
    let newWatchedLessons;

    if (isWatched) {
      newWatchedLessons = watchedLessons.filter((id: string) => id !== lessonId);
    } else {
      newWatchedLessons = [...watchedLessons, lessonId];
    }

    localStorage.setItem('watchedLessons', JSON.stringify(newWatchedLessons));
    setIsWatched(!isWatched);
  };

  const toggleFavorite = () => {
    const favoriteLessons = JSON.parse(localStorage.getItem('favoriteLessons') || '[]');
    let newFavoriteLessons;

    if (isFavorite) {
      newFavoriteLessons = favoriteLessons.filter((id: string) => id !== lessonId);
    } else {
      newFavoriteLessons = [...favoriteLessons, lessonId];
    }

    localStorage.setItem('favoriteLessons', JSON.stringify(newFavoriteLessons));
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="video-player-container">
      <div className="aspect-video rounded-lg overflow-hidden bg-gray-100 mb-4">
        <iframe
          src={videoUrl}
          title={title}
          className="w-full h-full"
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
      
      <div className="flex justify-between items-center">
        <button
          onClick={toggleWatched}
          className={`button-large flex items-center gap-2 ${
            isWatched ? 'bg-green-500 text-white' : 'bg-gray-200'
          }`}
          aria-label={isWatched ? "Marcar como não assistido" : "Marcar como assistido"}
        >
          <Check className={isWatched ? "text-white" : "text-gray-600"} />
          {isWatched ? "Assistido" : "Marcar como assistido"}
        </button>

        <button
          onClick={toggleFavorite}
          className={`button-large flex items-center gap-2 ${
            isFavorite ? 'bg-red-500 text-white' : 'bg-gray-200'
          }`}
          aria-label={isFavorite ? "Remover dos favoritos" : "Adicionar aos favoritos"}
        >
          <Heart className={isFavorite ? "text-white fill-current" : "text-gray-600"} />
          {isFavorite ? "Favoritado" : "Favoritar"}
        </button>
      </div>
    </div>
  );
}