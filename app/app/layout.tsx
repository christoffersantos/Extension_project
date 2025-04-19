import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Curso de Informática",
  description: "Aprenda informática de forma simples e acessível",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1E40AF" />
      </head>
      <body className={inter.className}>
        <header role="banner">
          <nav className="bg-blue-600 text-white p-4" role="navigation" aria-label="Menu principal">
            <div className="container mx-auto flex justify-between items-center">
              <Link 
                href="/" 
                className="text-2xl font-bold hover:underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
                aria-label="Ir para página inicial"
              >
                Curso de Informática
              </Link>
              <Link 
                href="/favorites" 
                className="button-large bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
                aria-label="Ver favoritos"
              >
                Favoritos
              </Link>
            </div>
          </nav>
        </header>
        {children}
        <footer role="contentinfo" className="bg-gray-100 p-4 mt-8">
          <div className="container mx-auto text-center">
            <p>© 2024 Curso de Informática. Todos os direitos reservados.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}