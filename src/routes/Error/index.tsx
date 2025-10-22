import { Link } from "react-router-dom";
export default function Error() {
  document.title = "404";
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center bg-[#f8f8f8] text-[#333] p-5 sm:p-6 md:p-8 lg:p-10 xl:p-12">
      <h1 className="text-[2.5em] text-[#d9534f] mb-2 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
         Error 404 Not Found - Página não encontrada
      </h1>
      <p className="text-gray">A página que você está procurando não existe ou foi movida.</p>
      <Link to="/" className="underline text-blue-600">Voltar para a página inicial</Link>
    </main>
  );
}