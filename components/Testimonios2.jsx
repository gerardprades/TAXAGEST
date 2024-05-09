import Image from "next/image";
import canvilaura from "@/public/assets/canvilaura.jpg";
import canvimarta from "@/public/assets/canvimarta.jpg";

export default function Testimonios2() {
  return (
    <div className="px-4 bg-gris_navbar">
      <div
        className="pt-10 flex justify-center flex-col sm:flex-row gap-10 pb-16
      "
      >
        <div>
          <div className="text-center mb-7">
            <p className="text-4xl text-white font-poppins uppercase font-bold">
              Laura
            </p>
            <p className="text-xl font-light text-white font-poppins">
              En 3 meses bajó 13kg
            </p>
          </div>

          <Image
            src={canvilaura}
            width={600}
            height={150}
            alt="cambiolaura"
            className="rounded"
          />
        </div>

        <div>
          <div className="text-center mb-7">
            <p className="text-4xl text-white font-poppins uppercase font-bold">
              Marta
            </p>
            <p className="text-xl font-light text-white font-poppins">
              ¡Perdió 19kg sintiéndose mejor que nunca!
            </p>
          </div>
          <Image
            src={canvimarta}
            width={600}
            height={150}
            alt="cambiomarta"
            className="rounded"
          />
        </div>
      </div>
    </div>
  );
}
