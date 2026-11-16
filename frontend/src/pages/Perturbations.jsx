import { useEffect, useState } from "react";
import PerturbationFilter from "../components/perturbations/PerturbationFilter";
import LineList from "../components/perturbations/LineList";

function correspondAuFiltre(perturbation, filtre) {
    const maintenant = new Date();
    const debut = new Date(perturbation.debut);
    const fin = new Date(perturbation.fin);

    if (filtre === "en-cours") return debut <= maintenant && maintenant <= fin;
    return debut > maintenant;
}

export default function Perturbations() {
    const [filtre, setFiltre] = useState("en-cours");
    const [lignes, setLignes] = useState([]);

    useEffect(() => {
        fetch("/sample_data.json")
            .then((reponse) => reponse.json())
            .then((data) => {
                setLignes(data.lignes);
            });
    }, []);

    const lignesFiltrees = lignes.map((ligne) => ({
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