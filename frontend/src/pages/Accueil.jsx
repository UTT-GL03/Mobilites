import Section from "../components/Section/Section";
import FaqItem from "../components/Faq/FaqItem";

export default function Accueil() {
    return (
        <>
            <Section title="Qui sommes-nous ?">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..</p>
            </Section>
            <Section title="Questions fréquentes">
                <FaqItem
                    question="Où acheter mes titres de transport ?"
                    answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
                />
                <FaqItem
                    question="Comment être informé des perturbations ?"
                    answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
                />
            </Section>
        </>
    );
}