import Logo from "./Logo";
import NavBar from "./NavBar";
import UserMenu from "./UserMenu";

export default function Header() {
    return (
        <header>
            <Logo />
            <div>
                <NavBar />
                <UserMenu />
            </div>
        </header>
    );
}