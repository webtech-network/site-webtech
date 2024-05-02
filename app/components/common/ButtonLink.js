export default function ButtonLink({ text, link }) {
    return (
        <a
            href={link}
            target="_blank">
            <div className="p-3 transition-colors bg-primary hover:bg-primary-light rounded-xl cursor-pointer font-bold text-secondary-dark flex items-center justify-center">
                {text}
            </div>
        </a>
    );
}