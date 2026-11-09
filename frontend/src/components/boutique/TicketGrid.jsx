import TicketCard from "./TicketCard";
import { grouperParLignes } from "../../utils/grouperParLignes";

export default function TicketGrid({ titres, onAcheter }) {
    return (
        <>
            {grouperParLignes(titres).map((rangee, i) => (
                <div className="grid" key={i}>
                    {rangee.map((titre) => (
                        <TicketCard key={titre.id} titre={titre} onAcheter={onAcheter} />
                    ))}
                </div>
            ))}
        </>
    );
}