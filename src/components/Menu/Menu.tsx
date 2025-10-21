import { Link } from "react-router-dom";

export default function Menu() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/pagamento">Pagamento</Link>
            <Link to="login">Login</Link>
        </nav>
    );
}