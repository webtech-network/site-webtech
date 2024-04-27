export default function ButtonLink({ texto, link }) {
    return (
        <a
            href={link}
            target="_blank"
            className="w-full h-12 bg-primaria hover:bg-primariaLight rounded-lg cursor-pointer font-bold text-secundariaDark flex items-center justify-center">
            {texto}
        </a>
    );
}