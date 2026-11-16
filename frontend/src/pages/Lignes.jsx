import { useEffect, useState } from "react";
import LineGrid from "../components/Lignes/LineGrid";

export default function Lignes() {
    const [lignes, setLignes] = useState([]);

    useEffect(() => {
        fetch("/sample_data.json")
            .then((reponse) => reponse.json())
            .then((data) => {
                setLignes(data.lignes);
            });
    }, []);

    return (
        <>
            <h1>Horaires</h1>
            <LineGrid lignes={lignes} />
        </>
    );
}