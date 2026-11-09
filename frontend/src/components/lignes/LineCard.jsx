import { Link, generatePath } from "react-router";
import { CHEMINS } from "../../chemins";

export default function LineCard({ ligne }) {
    return (
        <Link to={generatePath(CHEMINS.ligne, { id: ligne.id })} className="carte-lien">
            <article>
                <h2>{ligne.nom}</h2>
                <p>{ligne.arrets.length} arrêts</p>
            </article>
        </Link>
    );
}