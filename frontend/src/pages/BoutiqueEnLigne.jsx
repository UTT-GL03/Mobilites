import TicketGrid from "../components/Boutique/TicketGrid";
import data from "../assets/sample_data.json";

export default function BoutiqueEnLigne() {
    function handleAcheter(titre) {
        alert(`« ${titre.nom} » ajouté à votre commande.`);
    }

    return (
        <>
            <h1>Boutique</h1>
            <TicketGrid titres={data.titres} onAcheter={handleAcheter} />
        </>
    );
}