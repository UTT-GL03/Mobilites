import Section from "../components/Section/Section";
import FaqItem from "../components/Faq/FaqItem";

export default function Home() {
    return (
        <>
            <Section title="Qui sommes-nous ?">
                <p>Texte sur l'entreprise.</p>
            </Section>
            <Section title="Questions fréquentes">
                <FaqItem
                    question="Où acheter mes titres de transport ?"
                    answer="Réponse à compléter."
                />
                <FaqItem
                    question="Comment être informé des perturbations ?"
                    answer="Réponse à compléter."
                />
            </Section>
        </>
    );
}