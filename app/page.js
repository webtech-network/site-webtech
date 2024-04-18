import Image from "next/image";
import BtnLink from "./components/BtnLink";
import CardParceiros from "./components/CampoCard/CardParceiros";
import CampoCard from "./components/CampoCard";
import CampoEventos from "./components/CampoEventos";

export default function Home() {

  return (
    <div className="">
      <header className="banner w-full">
        <section className="conteudo-banner w-10/12 grid grid-cols-12 gap-4 mx-auto">
          <div className="flex flex-col gap-4 col-span-12 md:col-span-7">
            <h1 className="text-3xl font-bold text-primaria text-sombra">Workshop de JavaScript</h1>
            <div>
              <p className="text-xl text-whiteLight text-sombra ">
                O evento irá abordar os desafios da linguagem
                assim como dicas de como iniciar e se aprofundar
                nessa linguagem modular e que está presente em
                quase todos os projetos atuais do mercado
              </p>

              <span className="block text-white font-bold text-sombra mt-10">Data: 01/02/2024</span>
            </div>


            <BtnLink texto={'Inscrições abertas'} link={'http://google.com'} />

          </div>
          <div className="flex justify-center items-center col-span-12 md:col-span-5">
            <img src="../foto-banner.png" alt="" className="max-w-full h-auto" />
          </div>
        </section>
      </header>







      <section className=" px-4 md:px-7">
        <div className=" container  mx-auto  py-5 grid grid-cols-12 ">
          <div className="col-span-12 md:col-span-8 me-0 md:me-16">
            <h2 className="font-bold text-center text-3xl ">Comunidade WebTech </h2>
            <p className=" mt-2 text-justify">
              &nbsp; &nbsp; &nbsp;
              Lorem ipsum dolor sit amet consectetur. Ac ut velit sed vestibulum commodo. Egestas rhoncus ultricies nec pharetra. Enim id amet varius a vel. Sollicitudin purus pharetra semper purus erat nisl et ut. Id massa consequat maecenas  tristique. Mollis risus suspendisse amet vel egestas sed vulputate ultrices. Cursus volutpat turpis nibh elementum in eu porttitor pretium justo. Arcu consequat in nulla hac tempor netus fermentum. Interdum egestas platea in dis placerat faucibus.
            </p>
            <p className="mt-1 text-justify">
              &nbsp; &nbsp; &nbsp;
              Lorem ipsum dolor sit amet consectetur. Ac ut velit sed vestibulum commodo. Egestas rhoncus ultricies nec pharetra. Enim id amet varius a vel. Sollicitudin purus pharetra semper purus erat nisl et ut. Id massa consequat maecenas  tristique. Mollis risus suspendisse amet vel egestas sed vulputate ultrices. Cursus volutpat turpis nibh elementum in eu porttitor pretium justo. Arcu consequat in nulla hac tempor netus fermentum. Interdum egestas platea in dis placerat faucibus.
            </p>
            <h3 className="font-bold text-center text-2xl mt-2">Conheça nossas redes Sociais</h3>
            <div className="flex justify-center">
              <div className="flex gap-3 justify-center items-center md:justify-start mt-2">
                <a href="https://www.linkedin.com/company/webtech-puc-minas/mycompany/" target="_blank"><img className="w-7" src="./linkedinHome.png" /></a>
                <a href="https://www.instagram.com/webtech.pucminas/" target="_blank"><img className="w-7" src="./instagramHome.png" /></a>
                <a href="" target="_blank"><img className="w-7" src="./githubHome.png" /></a>
                <a href="https://www.youtube.com/@Webtech.PUCMinas" target="_blank"><img className="w-7 " src="./youtubeHome.png" /></a>
              </div>
            </div>

          </div>
          <div className="col-span-12 md:col-span-4 flex justify-center">
            <iframe className="w-96 h-64 md:h-96 mt-5 md:mt-0" src="https://discord.com/widget?id=1167587327376359424&theme=dark" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
          </div>
        </div>

      </section>
      
      





      <div className="bg-primaria p-7 px-4 md:px-7">
            <div className="container  mx-auto  py-5">
              <CampoCard/>
 
            </div>
      </div>

      <div className="p-7 px-4 md:px-7 mt-6">
            <div className="container  mx-auto  py-5">
              <CampoEventos/>
 
            </div>
      </div>














    </div>
  );
}
