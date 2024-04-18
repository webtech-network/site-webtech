export default function BtnLink({ texto, link }) {
    return (


        <form action={link} target="_blank">
            <input type="submit" className="w-full h-12 bg-primaria box-sombra rounded-lg cursor-pointer font-bold text-secundariaDark" value={texto} />
        </form>
    );
}