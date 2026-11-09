import PerturbationItem from "./PerturbationItem";

export default function LineList({ lignes }) {
    return (
        <ul>
            {lignes.map((ligne) => (
                <li key={ligne.id}>
                    <h3>{ligne.nom}</h3>
                    {ligne.perturbations.length === 0 ? (
                        <p>Aucune perturbation.</p>
                    ) : (
                        ligne.perturbations.map((p) => (
                            <PerturbationItem key={p.id} perturbation={p} />
                        ))
                    )}
                </li>
            ))}
        </ul>
    );
}