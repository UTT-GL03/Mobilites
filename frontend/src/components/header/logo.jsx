import { Link } from "react-router-dom";

export default function Logo() {
    return (
        <Link to="/" aria-label="Retour à l'accueil">
            Mobilités
        </Link>
    );
}