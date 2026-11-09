const formatPrix = (prix) =>
    new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }).format(prix);

export default function TicketCard({ titre, onAcheter }) {
    return (
        <li>
            <article>
                <div>
                    <h2>{titre.nom}</h2>
                    <p>{titre.description}</p>
                    <p>{formatPrix(titre.prix)}</p>
                </div>
                <button
                    type="button"
                    onClick={() => onAcheter(titre)}
                    aria-label={`Acheter ${titre.nom}`}
                >
                    Acheter
                </button>
            </article>
        </li>
    );
}