export default function ScheduleTable({ arrets }) {
    return (
        <div className="overflow-auto">
            <table>
                <thead>
                <tr>
                    <th scope="col">Arrêt</th>
                    <th scope="col" colSpan={arrets[0]?.passages.length}>
                        Passages
                    </th>
                </tr>
                </thead>
                <tbody>
                {arrets.map((arret) => (
                    <tr key={arret.nom}>
                        <th scope="row">{arret.nom}</th>
                        {arret.passages.map((heure) => (
                            <td key={heure}>{heure}</td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}