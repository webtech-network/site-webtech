import Link from "next/link";
export default function NotFound() {
    return (

        <div className="h-screen flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold text-dangerLight">404 - Página não encontrada</h1>
            <p className="text-secundariaDark font-bold mt-4 ">A página que você está procurando não existe ou foi descontinuada.</p>
            <Link className="px-6 py-3 bg-primaria text-secundariaDark font-bold rounded-md mt-3" href="/">Voltar para a página inicial</Link>
        </div>



    );
}