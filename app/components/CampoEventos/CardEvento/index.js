export default function CardEvento({imagem, texto, data, local}){
    return(
        <div className="flex flex-col gap-3 p-4 min-w-52  max-w-52 md:min-w-80 md:max-w-80 bg-cinza  box-sombra-sm rounded-md  md:bg-opacity-0  ">
            <img className="w-full h-40 hidden md:block" src={imagem} alt="" />
            <h1 className="ms-0 md:ms-4 text-secundariaDark font-bold text-xl">{data}</h1>
            <div className="ms-0 md:ms-7">
                <p>
                    {texto}
                </p>
                <span className="text-secundariaDark font-bold mt-3 ">{local}</span>
            </div>

        </div>
    );
}