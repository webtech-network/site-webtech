export default function CardParceiros({imagem, texto, titulo}){
    return(
        <div className="flex flex-col gap-3 p-4 min-w-[300px] bg-white bg-opacity-50 rounded-lg">
            <img className="w-full h-40" src={imagem} alt="" />
            <h1 className="text-center text-xl text-secundariaDark font-bold">{titulo}</h1>
            <p>
                {texto}
            </p>
        </div>
    );
}