import Link from "next/link";
export default function NotFound() {
    return (

        <div className="h-screen flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold text-danger-light">404 - Página não encontrada</h1>
            <p className="text-secondary-dark font-bold mt-4 ">A página que você está procurando não existe ou foi descontinuada.</p>
            <Link className="px-6 py-3 bg-primary text-secondary-dark font-bold rounded-xl mt-3" href="/">Voltar para a página inicial</Link>
        </div>



    );
}