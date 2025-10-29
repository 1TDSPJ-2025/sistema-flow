import { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "../Menu/Menu.tsx";

export default function Cabecalho() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
        >
          Sistema Flow
        </Link>

        <nav className="hidden md:flex gap-8 items-center text-gray-700 font-medium">
          <Link to="/" className="hover:text-blue-600 transition-colors">
            Início
          </Link>
          <Link to="/produto" className="hover:text-blue-600 transition-colors">
            Produtos
          </Link>
          <Link to="/pagamento" className="hover:text-blue-600 transition-colors">
            Pagamento
          </Link>
          <Link to="/login" className="hover:text-blue-600 transition-colors">
            Login
          </Link>
        </nav>

        <button
          onClick={() => setMenuAberto(!menuAberto)}
          className="md:hidden text-gray-700 hover:text-blue-600 transition"
          aria-label="Abrir menu"
        >
          {menuAberto ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
          menuAberto ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-blue-600">Menu</h2>
          <button onClick={() => setMenuAberto(false)} aria-label="Fechar menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col gap-4 px-6 py-6 text-gray-700 font-medium">
          <Link
            to="/"
            className="hover:text-blue-600 transition-colors"
            onClick={() => setMenuAberto(false)}
          >
            Início
          </Link>
          <Link
            to="/produto"
            className="hover:text-blue-600 transition-colors"
            onClick={() => setMenuAberto(false)}
          >
            Produtos
          </Link>
          <Link
            to="/pagamento"
            className="hover:text-blue-600 transition-colors"
            onClick={() => setMenuAberto(false)}
          >
            Pagamento
          </Link>
          <Link
            to="/login"
            className="hover:text-blue-600 transition-colors"
            onClick={() => setMenuAberto(false)}
          >
            Login
          </Link>
        </nav>
      </div>

      {menuAberto && (
        <div
          onClick={() => setMenuAberto(false)}
          className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm md:hidden z-30 transition-opacity duration-300"
        ></div>
      )}
    </header>
  );
}
