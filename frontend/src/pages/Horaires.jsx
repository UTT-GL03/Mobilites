import LineGrid from "../components/Horaires/LineGrid";
import data from "../assets/sample_data.json";

export default function Horaires() {
    return (
        <>
            <h1>Horaires</h1>
            <LineGrid lignes={data.lignes} />
        </>
    );
}