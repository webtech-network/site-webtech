import EventsCard from "../components/EventsCard/card";

export default function EventsPage() {
  return (
    <main>
      <div className="md:p-20 md:pt-0 p-10 pt-0 max-w-screen-2xl m-auto text-secondaryDark">
        <div className="">
          <EventsCard />
          <h1 className="md:text-4xl md:my-[74px] my-5 text-xl text-center font-bold">
            Perdeu algum evento?
          </h1>
          <h3 className="md:text-2xl">
            Não fique triste, nossa história está eternizada no nosso canal do
            YouTube assista aos eventos incríveis que já foram registrados em
            nosso canal:
          </h3>
          <div className="flex md:flex-row flex-col md:gap-20 gap-5 my-10 bg-[#F0F0F0] drop-shadow-lg rounded-2xl p-7">
            <div className="md:w-3/5 flex flex-col gap-5 justify-between">
              <div className="flex flex-col gap-2">
                <h2 className="md:text-2xl font-bold">
                  WebTech Days - JavaScript Edition | Await, async não é sync. I promise (Rommel Carneiro)
                </h2>
                <p className="text-sm md:text-base">
                  WebTech Days - JavaScript Edition que aconteceu no dia 06/12/2023 na PUC Minas Praça da Liberdade em Belo Horizonte/MG.

                </p>
              </div>
              <p className="font-bold">Data que ocorreu: 06/12/2023</p>
            </div>
            <div className="md:w-2/5 ">
              <a href="https://www.youtube.com/watch?v=9bpqDaOI9q0" target="blank">
                <img
                  className="w-full aspect-video rounded-2xl"
                  src="https://i.ytimg.com/an_webp/bMi6UUm_o7A/mqdefault_6s.webp?du=3000&sqp=CICoi7EG&rs=AOn4CLAvP8gx7Gh8EL_4PQsHSuc0ncqKJg "
                  alt="placeholder"
                />
              </a>
            </div>
          </div>

          <div className="flex md:flex-row flex-col md:gap-20 gap-5 my-10 bg-[#F0F0F0] drop-shadow-lg rounded-2xl p-7">
            <div className="md:w-3/5 flex flex-col gap-5 justify-between">
              <div className="flex flex-col gap-2">
                <h2 className="md:text-2xl font-bold">
                  WebTech Days - JavaScript Edition | Frameworks Front-End mais populares (Samuel Martins)
                </h2>
                <p className="text-sm md:text-base">
                  WebTech Days - JavaScript Edition que aconteceu no dia 06/12/2023 na PUC Minas Praça da Liberdade em Belo Horizonte/MG.

                </p>
              </div>
              <p className="font-bold">Data que ocorreu: 06/12/2023</p>
            </div>
            <div className="md:w-2/5 ">
              <a href="https://www.youtube.com/watch?v=cv60ZmV7E4Y" target="blank">
                <img
                  className="w-full aspect-video rounded-2xl"
                  src="https://i.ytimg.com/vi/cv60ZmV7E4Y/hqdefault.jpg?sqp=-oaymwE2CPYBEIoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARgrIEAofzAP&rs=AOn4CLBY5DEwcSiQvaqOADVeGudVHWid3w"
                  alt="placeholder"
                />
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <a
              href="https://www.youtube.com/@Webtech.PUCMinas/featured"
              target="blank"
            >
              <button className="drop-shadow-md bg-primaria text-secundariaDark px-16 py-2 mb-5 rounded-md font-bold hover:bg-primariaLight md:text">Ver mais</button>
            </a>
          </div>

          <h1 className="md:text-4xl md:my-[74px] my-5 text-xl text-center font-bold">Parceiros</h1>
          <div className="grid md:grid-cols-4 grid-cols-2 gap-5">
            <a href="https://www.sydle.com/br/" target="blank"><img className="w-[200px] h-[100px] object-cover rounded-2xl mx-auto mt-5 drop-shadow-md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT91t3QEKoeNLm5zkIJFMxlGQvIzrlf9AKtS9qf-p-hbQ&s" alt="placeholder" /></a>
            <a href="https://www.dtidigital.com.br/" target="blank"><img className="w-[200px] h-[100px] object-cover rounded-2xl mx-auto mt-5 drop-shadow-md" src="https://activecs.co/wp-content/uploads/2019/01/case-dti.jpg" alt="placeholder" /></a>
            <a href="https://ioasys.com.br/" target="blank"><img className="w-[200px] h-[100px] object-cover rounded-2xl mx-auto mt-5 drop-shadow-md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd38la2GhtRTT_d7xIyc2KId7HYNcY8j_-y2VsfrJpqg&s" alt="placeholder" /></a>
            <a href="https://mobile.wayminder.com.br/" target="blank"><img className="w-[200px] h-[100px] object-cover rounded-2xl mx-auto mt-5 drop-shadow-md" src="https://www.projetodraft.com/wp-content/uploads/2023/07/way-minder.png" alt="placeholder" /></a>
          </div>
        </div>
      </div>
    </main >
  );
}