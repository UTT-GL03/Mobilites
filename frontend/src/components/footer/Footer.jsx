import { Link } from "react-router-dom";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="site-footer">
            <div className="container">
                <small>© {year} Mobilités</small>
            </div>
        </footer>
    );
}