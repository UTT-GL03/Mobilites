import LineCard from "./LineCard";

export default function LineGrid({ lignes }) {
    return (
        <ul>
            {lignes.map((ligne) => (
                <LineCard key={ligne.id} ligne={ligne} />
            ))}
        </ul>
    );
}