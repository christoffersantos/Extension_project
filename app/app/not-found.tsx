import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container mx-auto px-4 py-8 text-center">
      <h1 className="main-heading">Página não encontrada</h1>
      <p className="text-lg mb-6">Desculpe, a página que você procura não existe.</p>
      <Link 
        href="/" 
        className="button-large bg-blue-600 text-white hover:bg-blue-700"
        aria-label="Voltar para página inicial"
      >
        Voltar para página inicial
      </Link>
    </main>
  );
}