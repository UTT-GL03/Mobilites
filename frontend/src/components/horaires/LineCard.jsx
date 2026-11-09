import { Link } from "react-router-dom";

export default function LineCard({ ligne }) {
    return (
        <Link to={`/horaires/${ligne.id}`} className="carte-lien">
            <article>
                <h2>{ligne.nom}</h2>
                <p>{ligne.arrets.length} arrêts</p>
            </article>
        </Link>
    );
}