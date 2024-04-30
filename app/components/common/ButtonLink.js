export default function ButtonLink({ text, link }) {
    return (
        <a
            href={link}
            target="_blank"
            className="w-full h-12 bg-primary hover:bg-primary-light rounded-lg cursor-pointer font-bold text-secondary-dark flex items-center justify-center">
            {text}
        </a>
    );
}