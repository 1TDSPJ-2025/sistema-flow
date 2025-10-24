import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="bg-gradient-to-r from-blue-900 to-blue-700 text-white px-6 py-4 shadow-md">
      <ul className="flex items-center justify-center space-x-8">
        <li>
          <Link
            to="/"
            className="hover:text-teal-300 transition-colors duration-300 font-medium"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/pagamento"
            className="hover:text-teal-300 transition-colors duration-300 font-medium"
          >
            Pagamento
          </Link>
        </li>
        <li>
          <Link
            to="/login"
            className="hover:text-teal-300 transition-colors duration-300 font-medium"
          >
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}
