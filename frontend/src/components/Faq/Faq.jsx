import FaqItem from "./FaqItem";

export default function Faq({ items }) {
    return (
        <div>
            {items.map((item) => (
                <FaqItem key={item.id} question={item.question} answer={item.answer} />
            ))}
        </div>
    );
}