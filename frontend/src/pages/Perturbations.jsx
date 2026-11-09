import { useState } from "react";
import PerturbationFilter from "../components/Perturbations/PerturbationFilter";
import LineList from "../components/Perturbations/LineList";
import data from "../assets/sample_data.json";

function correspondAuFiltre(perturbation, filtre) {
    const maintenant = new Date();
    const debut = new Date(perturbation.debut);
    const fin = new Date(perturbation.fin);

    if (filtre === "en-cours") return debut <= maintenant && maintenant <= fin;
    return debut > maintenant;
}

export default function Perturbations() {
    const [filtre, setFiltre] = useState("en-cours");

    const lignesFiltrees = data.lignes.map((ligne) => ({
        ...ligne,
        perturbations: ligne.perturbations.filter((p) =>
            correspondAuFiltre(p, filtre)
        ),
    }));

    return (
        <>
            <h1>Perturbations</h1>
            <PerturbationFilter value={filtre} onChange={setFiltre} />
            <LineList lignes={lignesFiltrees} />
        </>
    );
}