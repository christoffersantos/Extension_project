export interface Theme {
  id: string;
  title: string;
  description: string;
  color: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  themeId: string;
  title: string;
  description: string;
  content: {
    type: 'video';
    videoUrl: string;
    duration: string;
    thumbnail: string;
  };
}

export const themes: Theme[] = [
  {
    id: "basic",
    title: "Informática Básica",
    description: "Aprenda os fundamentos do computador",
    color: "theme-1",
    lessons: [
      {
        id: "basic-1",
        themeId: "basic",
        title: "Introdução ao Computador",
        description: "Conheça as partes básicas do computador",
        content: {
          type: "video",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          duration: "10:00",
          thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
        }
      },
      {
        id: "basic-2",
        themeId: "basic",
        title: "Como usar o Mouse",
        description: "Aprenda a usar o mouse corretamente",
        content: {
          type: "video",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          duration: "8:30",
          thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
        }
      }
    ]
  },
  {
    id: "internet",
    title: "Internet e E-mail",
    description: "Navegue na internet com segurança",
    color: "theme-2",
    lessons: [
      {
        id: "internet-1",
        themeId: "internet",
        title: "Navegando na Internet",
        description: "Aprenda a usar navegadores web",
        content: {
          type: "video",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          duration: "12:00",
          thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
        }
      }
    ]
  }
];