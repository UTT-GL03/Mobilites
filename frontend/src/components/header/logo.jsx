import { Link } from "react-router";
import { CHEMINS } from "../../chemins";

export default function Logo() {
    return (
        <Link to={CHEMINS.accueil} className="logo" aria-label="Mobilités, retour à l'accueil">
            Mobilités
        </Link>
    );
}