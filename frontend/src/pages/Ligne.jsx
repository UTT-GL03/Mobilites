import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { CHEMINS } from "../chemins";
import ScheduleTable from "../components/lignes/ScheduleTable";

export default function Ligne() {
    const { id } = useParams();
    const [ligne, setLigne] = useState(undefined);

    useEffect(() => {
        fetch("/sample_data.json")
            .then((reponse) => reponse.json())
            .then((data) => {
                setLigne(data.lignes.find((l) => l.id === id) ?? null);
            });
    }, [id]);

    if (ligne === undefined) {
        return <p aria-busy="true">Chargement…</p>;
    }

    if (ligne === null) {
        return (
            <>
                <h1>Ligne introuvable</h1>
                <Link to={CHEMINS.lignes}>Voir toutes les lignes</Link>
            </>
        );
    }

    return (
        <>
            <Link to={CHEMINS.lignes}>← Toutes les lignes</Link>
            <h1>Horaires - {ligne.nom}</h1>
            <ScheduleTable arrets={ligne.arrets} />
        </>
    );
}
