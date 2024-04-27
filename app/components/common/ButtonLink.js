export default function ButtonLink({ texto, link }) {
    return (

        <form action={link} target="_blank">
            <input type="submit" className="w-full h-12 bg-primaria rounded-lg cursor-pointer font-bold text-secundariaDark" value={texto} />
        </form>
    );
}