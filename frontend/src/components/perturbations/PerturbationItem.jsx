import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/fr";

dayjs.extend(relativeTime);
dayjs.locale("fr");

export default function PerturbationItem({ perturbation }) {
    const debut = dayjs(perturbation.debut);
    const fin = dayjs(perturbation.fin);
    const aVenir = debut.isAfter(dayjs());

    return (
        <article>
            <header>
        <span className="badge">
          {aVenir ? `Commence ${debut.fromNow()}` : `Se termine ${fin.fromNow()}`}
        </span>
            </header>
            <h4>{perturbation.titre}</h4>
            <p>{perturbation.description}</p>
            <footer>
                <small>
                    Du <time dateTime={perturbation.debut}>{debut.format("D MMMM")}</time>{" "}
                    au <time dateTime={perturbation.fin}>{fin.format("D MMMM YYYY")}</time>
                </small>
            </footer>
        </article>
    );
}