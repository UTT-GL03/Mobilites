import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Horaires from "./pages/Horaires";
import LigneHoraires from "./pages/LigneHoraires";
import Perturbations from "./pages/Perturbations";
import Boutique from "./pages/Boutique";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/horaires" element={<Horaires />} />
                    <Route path="/horaires/:id" element={<LigneHoraires />} />
                    <Route path="/perturbations" element={<Perturbations />} />
                    <Route path="/boutique" element={<Boutique />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}