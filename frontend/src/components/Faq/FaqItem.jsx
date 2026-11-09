export default function FaqItem({ question, answer }) {
    return (
        <details>
            <summary>{question}</summary>
            <p>{answer}</p>
        </details>
    );
}