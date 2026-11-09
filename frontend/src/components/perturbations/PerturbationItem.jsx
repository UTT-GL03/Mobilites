const formatDate = (date) => new Date(date).toLocaleDateString("fr-FR");

export default function PerturbationItem({ perturbation }) {
    return (
        <article>
            <h4>{perturbation.titre}</h4>
            <p>{perturbation.description}</p>
            <p>
                Du {formatDate(perturbation.debut)} au {formatDate(perturbation.fin)}
            </p>
        </article>
    );
}