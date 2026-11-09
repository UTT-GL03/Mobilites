import { BrowserRouter, Routes, Route } from "react-router";
import { CHEMINS } from "./chemins";
import MainLayout from "./layouts/MainLayout";
import Accueil from "./pages/Accueil";
import Ligne from "./pages/Ligne.jsx";
import Lignes from "./pages/Lignes.jsx";
import Perturbations from "./pages/Perturbations";
import BoutiqueEnLigne from "./pages/BoutiqueEnLigne";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path={CHEMINS.accueil} element={<Accueil />} />
                    <Route path={CHEMINS.lignes} element={<Lignes />} />
                    <Route path={CHEMINS.ligne} element={<Ligne />} />
                    <Route path={CHEMINS.perturbations} element={<Perturbations />} />
                    <Route path={CHEMINS.boutiqueEnLigne} element={<BoutiqueEnLigne />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}