import LineGrid from "../components/Lignes/LineGrid";
import data from "../assets/sample_data.json";

export default function Lignes() {
    return (
        <>
            <h1>Horaires</h1>
            <LineGrid lignes={data.lignes} />
        </>
    );
}