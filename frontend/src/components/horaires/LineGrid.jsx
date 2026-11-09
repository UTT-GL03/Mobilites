import LineCard from "./LineCard";
import { grouperParLignes } from "../../utils/grouperParLignes";

export default function LineGrid({ lignes }) {
    return (
        <>
            {grouperParLignes(lignes).map((rangee, i) => (
                <div className="grid" key={i}>
                    {rangee.map((ligne) => (
                        <LineCard key={ligne.id} ligne={ligne} />
                    ))}
                </div>
            ))}
        </>
    );
}