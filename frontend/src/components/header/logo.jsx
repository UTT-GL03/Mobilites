import { Link } from "react-router-dom";

export default function Logo() {
    return (
        <Link to="/" className="logo" aria-label="Mobilités, retour à l'accueil">
            Mobilités
        </Link>
    );
}