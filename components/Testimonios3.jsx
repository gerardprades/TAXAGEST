import Image from "next/image";
import canvialberto from "@/public/assets/canvialberto.jpg";

export default function Testimonios3() {
  return (
    <div className="px-4 bg-gris_navbar pt-10">
      
      <div className="text-center">
      <p className="text-4xl text-white font-poppins uppercase font-bold">
          Alberto
        </p>
        
        <p className="text-xl font-light text-white font-poppins">
          Perdió 18kg en 5 meses
        </p>
      </div>

      <div className="mt-10 flex justify-center flex-col sm:flex-row gap-10">
        <div>
          <Image
            src={canvialberto}
            width={600}
            height={150}
            alt="canvialberto"
            className="rounded"
         
          />
        </div>

        <div>
          <iframe
            src="https://player.vimeo.com/video/831955862?badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Testimonio de Maribel"
            className="rounded 2xl:w-[728px] 2xl:h-[419px] xl:w-[700px] xl:h-[400px] lg:w-[600px] lg:h-[350px] md:w-[700px] md:h-[350px] sm:w-[600px] sm:h-[350px] max-[639px]:w-[600px] max-[639px]:h-[300px] max-[597px]:w-[500px] max-[597px]:h-[270px] max-[515px]:w-[430px] max-[515px]:h-[250px] max-[455px]:w-[400px] max-[455px]:h-[220px] max-[429px]:w-[360px] max-[429px]:h-[210px] max-[375px]:w-[340px] max-[375px]:h-[200px] max-[345px]:w-[320px] max-[345px]:h-[180px]"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
