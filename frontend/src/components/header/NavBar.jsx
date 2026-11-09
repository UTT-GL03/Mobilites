import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <nav aria-label="Navigation principale">
            <ul>
                <li><NavLink to="/horaires">Horaires</NavLink></li>
                <li><NavLink to="/perturbations">Perturbations</NavLink></li>
                <li><NavLink to="/boutique">Boutique</NavLink></li>
            </ul>
        </nav>
    );
}