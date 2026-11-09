import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <ul>
            <li><NavLink to="/horaires" data-texte="Horaires">Horaires</NavLink></li>
            <li><NavLink to="/perturbations" data-texte="Perturbations">Perturbations</NavLink></li>
            <li><NavLink to="/boutique" data-texte="Boutique">Boutique</NavLink></li>
        </ul>
    );
}