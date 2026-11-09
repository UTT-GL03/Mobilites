import { Link, useParams } from "react-router";
import { CHEMINS } from "../chemins";
import ScheduleTable from "../components/lignes/ScheduleTable";
import data from "../assets/sample_data.json";

export default function Ligne() {
    const { id } = useParams();
    const ligne = data.lignes.find((l) => l.id === id);

    if (!ligne) {
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