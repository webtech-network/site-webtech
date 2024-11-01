export default function PartnerCard({ imagem, text, titulo }) {
    return (
        <div className="flex flex-col gap-3 p-4 min-w-[300px] max-w-[400px] bg-white bg-opacity-50 rounded-xl">
            <div className="w-full bg-white rounded-xl place-items-center">
                <img className="h-40 rounded-xl" src={imagem} alt="" />
            </div>
            <h1 className="text-xl text-secondary-dark font-bold">{titulo}</h1>
            <p>
                {text}
            </p>
        </div>
    );
}