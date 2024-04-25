export default function Btn({ texto, eventoClick }) {
    return (
        <button onClick={eventoClick} className="w-full h-12 bg-primaria box-sombra rounded-lg cursor-pointer font-bold text-secundariaDark" >{text}</button>
    );
}