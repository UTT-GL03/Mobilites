import { useEffect, useState } from "react";
import TicketGrid from "../components/Boutique/TicketGrid";

export default function BoutiqueEnLigne() {
    const [titres, setTitres] = useState([]);

    useEffect(() => {
        fetch("/sample_data.json")
            .then((reponse) => reponse.json())
            .then((data) => {
                setTitres(data.titres);
            });
    }, []);

    function handleAcheter(titre) {
        alert(`« ${titre.nom} » ajouté à votre commande.`);
    }

    return (
        <>
            <h1>Boutique</h1>
            <TicketGrid titres={titres} onAcheter={handleAcheter} />
        </>
    );
}
