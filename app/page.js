import CampoCard from "./components/CampoCard";
import CampoEventos from "./components/CampoEventos";
import GoogleMaps from "./components/GoogleMaps";
import Banner from "./components/Banner/banner";

export default function Home() {
      return (
            <div className="">
                  <header className="banner md:px-20 px-10 py-10 w-full">
                        <Banner />
                  </header>
                  <section className="px-10 md:px-20">
                        <div className="container mx-auto py-5 grid grid-cols-1 md:grid-cols-12 gap-4">
                              <div className="col-span-12 md:col-span-7">
                                    <h2 className="font-bold text-center text-3xl py-5">Comunidade WebTech</h2>
                                    <p className="mt-2 text-justify">
                                          &nbsp; &nbsp; &nbsp; Lorem ipsum dolor sit amet consectetur. Ac ut velit sed vestibulum commodo. Egestas rhoncus ultricies nec pharetra. Enim id amet varius a vel. Sollicitudin purus pharetra semper purus erat nisl et ut. Id massa consequat maecenas  tristique. Mollis risus suspendisse amet vel egestas sed vulputate ultrices. Cursus volutpat turpis nibh elementum in eu porttitor pretium justo. Arcu consequat in nulla hac tempor netus fermentum. Interdum egestas platea in dis placerat faucibus.
                                    </p>
                                    <p className="mt-1 text-justify">
                                          &nbsp; &nbsp; &nbsp; Lorem ipsum dolor sit amet consectetur. Ac ut velit sed vestibulum commodo. Egestas rhoncus ultricies nec pharetra. Enim id amet varius a vel. Sollicitudin purus pharetra semper purus erat nisl et ut. Id massa consequat maecenas  tristique. Mollis risus suspendisse amet vel egestas sed vulputate ultrices. Cursus volutpat turpis nibh elementum in eu porttitor pretium justo. Arcu consequat in nulla hac tempor netus fermentum. Interdum egestas platea in dis placerat faucibus.
                                    </p>
                                    <h3 className="font-bold text-center text-2xl py-5 mt-2">Conheça nossas redes Sociais</h3>
                                    <div className="flex pb-5 justify-center">
                                          <div className="flex gap-3 justify-center items-center md:justify-start mt-2">
                                                <a href="https://www.linkedin.com/company/webtech-puc-minas/mycompany/" target="_blank"><img className="w-7" src="./linkedinHome.png" /></a>
                                                <a href="https://www.instagram.com/webtech.pucminas/" target="_blank"><img className="w-7" src="./instagramHome.png" /></a>
                                                <a href="" target="_blank"><img className="w-7" src="./githubHome.png" /></a>
                                                <a href="https://www.youtube.com/@Webtech.PUCMinas" target="_blank"><img className="w-7 " src="./youtubeHome.png" /></a>
                                          </div>
                                    </div>
                                    <div className="p-7 px-4 md:px-7 mt-6">
                                          <div className="container mx-auto py-5">
                                                <CampoEventos />
                                          </div>
                                    </div>
                              </div>
                              
                        </div>
                        
                  </section>
                  <GoogleMaps />

            </div>
      );
}
