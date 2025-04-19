import { LessonCard } from "@/components/ui/lesson-card";
import { themes } from "@/lib/data";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function ThemePage({ params }: { params: { themeId: string } }) {
  const theme = themes.find((t) => t.id === params.themeId);

  if (!theme) {
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
            href="/" 
            className="button-large bg-gray-200 hover:bg-gray-300 inline-flex items-center"
            aria-label="Voltar para página inicial"
          >
            <span aria-hidden="true">←</span>
            <span className="ml-2">Voltar</span>
          </Link>
        </nav>

        <h1 className="main-heading" tabIndex={0}>{theme.title}</h1>
        
        <section aria-label={`Aulas de ${theme.title}`}>
          {theme.lessons.length === 0 ? (
            <p className="text-center text-lg text-gray-600" role="alert">
              Nenhuma aula disponível no momento.
            </p>
          ) : (
            <ul className="space-y-4 list-none p-0">
              {theme.lessons.map((lesson) => (
                <li key={lesson.id}>
                  <LessonCard
                    id={lesson.id}
                    themeId={theme.id}
                    title={lesson.title}
                    description={lesson.description}
                  />
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
    </>
  );
}