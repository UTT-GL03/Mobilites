export default function PerturbationFilter({ value, onChange }) {
    return (
        <fieldset className="filtre">
            <legend>Afficher les perturbations</legend>
            <label>
                <input
                    type="radio"
                    name="filtre"
                    value="en-cours"
                    checked={value === "en-cours"}
                    onChange={(e) => onChange(e.target.value)}
                />
                En cours
            </label>
            <label>
                <input
                    type="radio"
                    name="filtre"
                    value="a-venir"
                    checked={value === "a-venir"}
                    onChange={(e) => onChange(e.target.value)}
                />
                À venir
            </label>
        </fieldset>
    );
}