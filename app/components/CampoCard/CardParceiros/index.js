export default function CardParceiros({imagem, texto}){
    return(
        <div className="flex flex-col gap-3 p-4 min-w-80 bg-white bg-opacity-50 rounded-lg">
            <img className="w-full h-40" src={imagem} alt="" />
            <h1 className="text-center font-bold"></h1>
            <p>
                {texto}
            </p>
        </div>
    );
}