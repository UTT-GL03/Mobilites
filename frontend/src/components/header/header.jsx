import Logo from "./Logo";
import NavBar from "./NavBar";

export default function Header() {
    return (
        <header className="site-header">
            <nav className="container" aria-label="Navigation principale">
                <ul>
                    <li><Logo /></li>
                </ul>
                <NavBar />
            </nav>
        </header>
    );
}