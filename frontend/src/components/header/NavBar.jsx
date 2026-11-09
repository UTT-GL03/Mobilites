import { NavLink } from "react-router";
import { CHEMINS } from "../../chemins";

export default function NavBar() {
    return (
        <ul>
            <li><NavLink to={CHEMINS.lignes} data-texte="Ligne">Ligne</NavLink></li>
            <li><NavLink to={CHEMINS.perturbations} data-texte="Perturbations">Perturbations</NavLink></li>
            <li><NavLink to={CHEMINS.boutiqueEnLigne} data-texte="Boutique en ligne">Boutique en ligne</NavLink></li>
        </ul>
    );
}