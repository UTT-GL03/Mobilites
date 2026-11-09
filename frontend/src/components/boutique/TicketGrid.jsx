import TicketCard from "./TicketCard";

export default function TicketGrid({ titres, onAcheter }) {
    return (
        <ul>
            {titres.map((titre) => (
                <TicketCard key={titre.id} titre={titre} onAcheter={onAcheter} />
            ))}
        </ul>
    );
}