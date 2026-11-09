import { Link } from "react-router-dom";

export default function LineCard({ ligne }) {
    return (
        <li>
            <Link to={`/horaires/${ligne.id}`}>
                <h2>{ligne.nom}</h2>
                <p>{ligne.arrets.length} arrêts</p>
            </Link>
        </li>
    );
}