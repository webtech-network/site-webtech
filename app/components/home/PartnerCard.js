export default function PartnerCard({ imagem, text, titulo }) {
    return (
        <div className="flex flex-col gap-3 p-4 min-w-[300px] max-w-[400px] bg-white bg-opacity-50 rounded-xl text-center">
            <div className="w-full flex justify-center items-center rounded-xl overflow-hidden">
                <img className="h-40 object-contain rounded-xl mix-blend-multiply lg:mix-blend-normal" src={imagem} alt={titulo} />
            </div>
            <h1 className="text-xl text-secondary-dark font-bold">{titulo}</h1>
            <p className="text-secondary-dark">
                {text}
            </p>
        </div>
    );
}