import { Link, useParams } from "react-router-dom";
import ScheduleTable from "../components/Horaires/ScheduleTable";
import data from "../assets/sample_data.json";

export default function LigneHoraires() {
    const { id } = useParams();
    const ligne = data.lignes.find((l) => l.id === id);

    if (!ligne) {
        return (
            <>
                <h1>Ligne introuvable</h1>
                <Link to="/horaires">Voir toutes les lignes</Link>
            </>
        );
    }

    return (
        <>
            <Link to="/horaires">← Toutes les lignes</Link>
            <h1>Horaires — {ligne.nom}</h1>
            <ScheduleTable arrets={ligne.arrets} />
        </>
    );
}