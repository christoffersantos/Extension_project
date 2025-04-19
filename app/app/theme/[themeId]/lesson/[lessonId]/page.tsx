import { themes } from "@/lib/data";
import { VideoPlayer } from "@/components/ui/video-player";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function LessonPage({
  params,
}: {
  params: { themeId: string; lessonId: string };
}) {
  const theme = themes.find((t) => t.id === params.themeId);
  const lesson = theme?.lessons.find((l) => l.id === params.lessonId);

  if (!theme || !lesson) {
    notFound();
  }

  return (
    <>
      <a href="#main-content" className="skip-link">
        Pular para o conteúdo principal
      </a>
      <main id="main-content" className="container mx-auto px-4 py-8">
        <nav className="mb-6" aria-label="Navegação principal">
          <Link 
            href={`/theme/${theme.id}`} 
            className="button-large bg-gray-200 hover:bg-gray-300 inline-flex items-center"
            aria-label={`Voltar para ${theme.title}`}
          >
            <span aria-hidden="true">←</span>
            <span className="ml-2">Voltar</span>
          </Link>
        </nav>

        <article className="max-w-4xl mx-auto">
          <h1 className="main-heading" tabIndex={0}>{lesson.title}</h1>
          
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <VideoPlayer
              lessonId={lesson.id}
              videoUrl={lesson.content.videoUrl}
              title={lesson.title}
            />
            
            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-2">Sobre esta aula</h2>
              <p className="text-gray-600">{lesson.description}</p>
              <div className="mt-4 text-sm text-gray-500">
                Duração: {lesson.content.duration}
              </div>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}