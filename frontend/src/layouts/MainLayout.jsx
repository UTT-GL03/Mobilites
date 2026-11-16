import { Outlet } from "react-router";
import Header from "../components/header/header";
import Footer from "../components/footer/Footer";

export default function MainLayout() {
    return (
        <>
            <Header />
            <main className="container">
                <Outlet />
            </main>
            <Footer />
        </>
    );
}