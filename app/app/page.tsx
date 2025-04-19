import { ThemeCard } from "@/components/ui/theme-card";
import { themes } from "@/lib/data";

export default async function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Pular para o conteúdo principal
      </a>
      <main id="main-content" className="container mx-auto px-4 py-8" role="main">
        <h1 className="main-heading" tabIndex={0}>
          Bem-vindo ao Curso de Informática
        </h1>
        
        <nav aria-label="Temas do curso">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 list-none p-0">
            {themes.map((theme) => (
              <li key={theme.id}>
                <ThemeCard
                  id={theme.id}
                  title={theme.title}
                  description={theme.description}
                  color={theme.color}
                />
              </li>
            ))}
          </ul>
        </nav>
      </main>
    </>
  );
}