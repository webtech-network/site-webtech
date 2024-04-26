export default function RedesSociais() {
    return (
        <>
            <h2 className="text-xl font-bold">Redes Sociais</h2>

            <div className="flex gap-3 justify-center md:justify-start mt-2">
                <a href="https://www.linkedin.com/company/webtech-puc-minas/mycompany/" target="_blank"><img className="w-6 text-red-500" src="/icons/linkedin.svg" /></a>
                <a href="https://www.instagram.com/webtech.pucminas/" target="_blank"><img className="w-6" src="/icons/instagram.svg" /></a>
                <a href="" target="_blank"><img className="w-6" src="/icons/github.svg" /></a>
                <a href="https://www.youtube.com/@Webtech.PUCMinas" target="_blank"><img className="w-6 " src="/icons/youtube.svg" /></a>

            </div>

        </>
    );

}