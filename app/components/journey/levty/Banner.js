import Image from "next/image";

export default function Banner() {
  return (
    <div className="relative w-full h-[415px] flex items-center px-8 md:px-32 overflow-hidden">
      <Image
        src="/journey/levty/bg_levty.png"
        alt="Fundo"
        fill
        objectFit="cover"
        objectPosition="80%"
        className="z-0"
      />

      <div className="z-10 flex flex-col md:px-4">
        <Image
          src="/journey/levty/logo_journey.svg"
          alt="Journey Backend"
          width={500}
          height={200}
        />

        <a
          href="#"
          className="bg-white text-[#0096D5] font-bold px-4 py-2 w-fit rounded-2xl text-base"
        >
          Garantir minha vaga →
        </a>

        <div className="mt-12 z-10">
          <Image
            src="/journey/levty/webtech_levty.svg"
            alt="Levty e WebTech"
            width={296}
            height={48}
          />
        </div>
      </div>
    </div>
  );
}
