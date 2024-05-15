import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import FooterLanding from "@/components/FooterLanding";
import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Link from "next/link";
import Head from "next/head";

const Index = () => {
  const [isClient, setIsClient] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const stickyRef = useRef(null);

  useEffect(() => {
    setIsClient(true);
    function handleResize() {
      setIsSmallScreen(window.innerWidth <= 640);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (stickyRef.current && isClient) {
        const sticky = stickyRef.current.offsetTop;
        if (window.pageYOffset > sticky) {
          stickyRef.current.style.position = "fixed";
          stickyRef.current.style.top = 0;
          stickyRef.current.style.zIndex = 9999;
          stickyRef.current.style.width = "100%";
        } else {
          stickyRef.current.style.position = "static";
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [stickyRef, isClient]);

  return (
    <div style={{ overflow: "auto" }}>
      <Head>
        <title>Taxagest | Equipo de Profesionales</title>
        <meta
          name="description"
          content="Planificaciones y dietas elaboradas por nuestro equipo de manera 100% personalizada a través de nuestra App. Aprenderás a entrenar y comer de forma saludable consiguiendo así el físico que deseas mientras disfrutas de todo el proceso. ¡Únete a nuestro equipo!"
        />
      </Head>

      {isClient && (
        <div className="relative">
          <div className="w-full h-screen 2xl:h-[520px] xl:h-[520px] lg:h-[500px] md:h-[450px] sm:h-[450px] max-[640px]:h-[500px] max-[395px]:h-[500px] max-[332px]:h-[550px] relative">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 object-cover w-full h-full"
            >
              <source src="/assets/fondopantallalanding.mp4" type="video/mp4" />
              Tu navegador no admite el elemento de video.
            </video>
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="absolute flex flex-col justify-center items-center pt-16 max-[779px]:pt-5">
              <div className="text-white font-poppins font-extrabold uppercase text-center 2xl:px-[190px] xl:px-[70px] lg:px-[50px] md:px-[30px] sm:px-[20px] max-[640px]:px-[20px] 2xl:text-[38px] xl:text-[35px] lg:text-[30px] md:text-[25px] sm:text-[23px] max-[640px]:text-[16px] max-[493px]:text-[16px] pb-10"></div>

              <div className="text-white font-poppins font-extrabold uppercase text-center 2xl:px-[120px] xl:px-[40px] lg:px-[10px] md:px-[20px] sm:px-[30px] max-[640px]:px-[40px] 2xl:text-[38px] xl:text-[35px] lg:text-[30px] md:text-[22px] sm:text-[20px] max-[640px]:text-[20px] max-[493px]:text-[15px] pb-10">
                Empieza a{" "}
                <span className="text-azul_taxagest">ganar comisiones</span>{" "}
                vendiendo Inmuebles gracias a nuestro programa{" "}
                <span className="text-azul_taxagest">Élite Inmobiliaria</span>
              </div>

              <div
                style={{ zIndex: 9999, position: "relative", width: "100%" }}
                className="bg-azul_taxagest z-50 text-black uppercase text-center font-poppins font-semibold px-3 py-5 2xl:px-[230px] 2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[15px] max-[450px]:text-[12px]"
                ref={stickyRef}
              >
                <div>
                  Con un sistema probado, cumpliendo la legalidad al 100% y con
                  un equipo de apoyo permanente que te acompañará en todo el
                  proceso
                </div>
                <div className="pt-[20px] max-[1023px]:pt-[10px] transition-transform duration-300 hover:translate-y-[-5px]">
                  <Link
                    href="https://wa.me/message/MVBAHQYQL4Y6M1"
                    className="bg-white text-black px-4 py-2 rounded-md font-bold font-poppins shadow-lg shadow-white transition-transform duration-300 hover:translate-y-[-5px]"
                  >
                    ¡CONTÁCTANOS AHORA!
                  </Link>
                </div>
              </div>

              <div className=" uppercase text-white font-extrabold text-center 2xl:px-[140px] xl:px-[120px] 2xl:text-[25px] xl:text-[21px] lg:text-[23px] md:text-[21px] sm:text-[19px] max-[621px]:text-[18px] max-[447px]:text-[15px]"></div>

              <div className="2xl:px-[230px] xl:px-[100px] lg:px-[30px] md:px-[30px] sm:px-[50px] max-[621px]:px-[50px] max-[447px]:px-[30px] max-[323px]:px-[20px] pt-[40px]">
                <div className="text-white font-poppins font-semibold text-center 2xl:text-[23px] xl:text-[23px] lg:text-[23px] md:text-[21px] sm:text-[19px] max-[621px]:text-[18px] max-[447px]:text-[20px]">
                  ¿Te imaginas tener{" "}
                  <span className="text-azul_taxagest">
                    tu negocio inmobiliario
                  </span>{" "}
                  con resultados desde
                  <span className="text-azul_taxagest">
                    {" "}
                    el primer momento?
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="bg-gris_taxagest2">
        <div className="pt-6 pb-6 text-white font-poppins font-bold text-center mx-[100px] max-[797px]:mx-[50px] max-[640px]:mx-[20px] 2xl:text-[20px] xl:text-[22px] lg:text-[23px] md:text-[21px] sm:text-[19px] max-[621px]:text-[18px] max-[447px]:text-[15px]">
          Ahora es posible, pero Hay Plazas limitadas por zonas. Puedes
          conseguir la exclusividad de tu zona y disponer de un equipo
          trabajando para ti.
        </div>

        <div className="text-white font-poppins font-bold text-center mx-[100px] max-[797px]:mx-[50px] max-[640px]:mx-[20px] 2xl:text-[23px] xl:text-[22px] lg:text-[23px] md:text-[21px] sm:text-[19px] max-[621px]:text-[18px] max-[447px]:text-[15px]">
          Escríbenos por <span className="text-azul_taxagest">WhatsApp</span>{" "}
          para descubrir si hay{" "}
          <span className="text-azul_taxagest">disponibilidad en tu zona</span>{" "}
          con un sólo <span className="text-azul_taxagest">clic</span>
        </div>
        <div className="flex justify-center pt-7 pb-10">
          <Link
            href="https://wa.me/message/MVBAHQYQL4Y6M1"
            className="bg-azul_taxagest text-white px-5 py-3 rounded-md font-extrabold font-poppins shadow-lg shadow-azul_taxagest text-[25px] transition-transform duration-300 hover:translate-y-[-5px]"
          >
            ¡HAZ CLIC!
          </Link>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row 2xl:px-[30px] xl:px-[30px] lg:px-[30px] md:px-[30px] sm:px-[20px] max-[640px]:px-[10px] max-[447px]:px-[30px] max-[323px]:px-[20px] pt-[30px] pb-[30px] bg-neutral-300">
        <div className="text-black text-center uppercase font-bold sm:w-1/3 2xl:text-[22px] xl:text-[20px] lg:text-[18px] md:text-[16px] sm:text-[19px] max-[640px]:text-[20px] max-[447px]:text-[20px] max-[640px]:leading-6">
          ¿Piensas que{" "}
          <span className="text-azul_taxagest">
            crear un negocio inmobiliario
          </span>{" "}
          requiere una{" "}
          <span className="text-azul_taxagest">
            importante inversión, un local y una burocracia insoportable?
          </span>
        </div>

        <div className="text-black uppercase pt-2 max-[640px]:pt-10  font-bold text-center sm:w-1/3 2xl:text-[22px] xl:text-[20px] lg:text-[18px] md:text-[16px] sm:text-[19px] max-[640px]:text-[20px] max-[447px]:text-[20px] max-[640px]:leading-6">
          ¿Ves <span className="text-red-600">imposible</span> empezar tú solo
          con todo el proceso de{" "}
          <span className="text-azul_taxagest">montar un negocio?</span>
        </div>

        <div className="text-black uppercase pt-2 max-[640px]:pt-10 font-bold text-center sm:w-1/3 2xl:text-[22px] xl:text-[20px] lg:text-[18px] md:text-[16px] sm:text-[19px] max-[640px]:text-[20px] max-[447px]:text-[20px] max-[640px]:leading-6">
          ¿Tienes un{" "}
          <span className="text-azul_taxagest font-black uppercase">don</span>{" "}
          para la{" "}
          <span className="text-azul_taxagest">comunicación y ambición</span>,
          pero no sabes por dónde empezar?
        </div>
      </div>

      <div className="flex justify-center pt-2 pb-10 bg-neutral-300 text-center">
        <Link
          href="https://wa.me/message/MVBAHQYQL4Y6M1"
          className="bg-azul_taxagest text-white px-5 py-3 rounded-md font-extrabold font-poppins shadow-lg shadow-black text-[25px] max-[416px]:text-[20px] max-[329px]:text-[16px] transition-transform duration-300 hover:translate-y-[-5px]"
        >
          ¡CONTÁCTANOS AHORA!
        </Link>
      </div>

      <div className="2xl:px-[300px] xl:px-[200px] lg:px-[150px] md:px-[50px] sm:px-[30px] max-[640px]:px-[20px] max-[447px]:px-[30px] max-[323px]:px-[20px] pt-[30px] pb-[30px]  bg-gris_taxagest2">
        <div className="text-azul_taxagest text-center uppercase font-black text-[33px] max-[415px]:text-[28px] max-[362px]:text-[24px] max-[640px]:leading-6">
          Esto es para ti si…
        </div>

        <li className="text-white uppercase pt-10 sm:pt-5 max-[640px]:pt-10 font-black text-left 2xl:text-[22px] xl:text-[20px] lg:text-[18px] md:text-[18px] sm:text-[15px] max-[640px]:text-[14px] max-[447px]:text-[14px] max-[640px]:leading-6">
          No quieres tener horarios
        </li>

        <li className="text-white uppercase pt-2 sm:pt-5 max-[640px]:pt-5 font-black text-left 2xl:text-[22px] xl:text-[20px] lg:text-[18px] md:text-[18px] sm:text-[15px] max-[640px]:text-[14px] max-[447px]:text-[14px] max-[640px]:leading-6">
          Te gusta el sector inmobiliario
        </li>

        <li className="text-white uppercase pt-2 sm:pt-5 max-[640px]:pt-5 font-black text-left 2xl:text-[22px] xl:text-[20px] lg:text-[18px] md:text-[18px] sm:text-[15px] max-[640px]:text-[14px] max-[447px]:text-[14px] max-[640px]:leading-6">
          Quieres emprender tu propio negocio
        </li>

        <li className="text-white uppercase pt-2 sm:pt-5 max-[640px]:pt-5 font-black text-left 2xl:text-[22px] xl:text-[20px] lg:text-[18px] md:text-[18px] sm:text-[15px] max-[640px]:text-[14px] max-[447px]:text-[14px] max-[640px]:leading-6">
          Tienes un don para la comunicación
        </li>

        <li className="text-white uppercase pt-2 sm:pt-5 max-[640px]:pt-5 font-black text-left 2xl:text-[22px] xl:text-[20px] lg:text-[18px] md:text-[18px] sm:text-[15px] max-[640px]:text-[14px] max-[447px]:text-[14px] max-[640px]:leading-6">
          Eres una persona ambiciosa y quieres disponer de tiempo y dinero
        </li>

        <li className="text-white uppercase pt-2 sm:pt-5 max-[640px]:pt-5 font-black text-left 2xl:text-[22px] xl:text-[20px] lg:text-[18px] md:text-[18px] sm:text-[15px] max-[640px]:text-[14px] max-[447px]:text-[14px] max-[640px]:leading-6">
          Si eres una persona responsable y comprometida con tus resultados y
          contigo misma
        </li>
      </div>

      <div className="flex justify-center pt-2 pb-10 bg-gris_taxagest2 text-center">
        <Link
          href="https://wa.me/message/MVBAHQYQL4Y6M1"
          className="bg-azul_taxagest text-white px-5 py-3 rounded-md font-extrabold font-poppins shadow-lg shadow-black text-[25px] max-[416px]:text-[20px] max-[329px]:text-[16px] transition-transform duration-300 hover:translate-y-[-5px]"
        >
          ¡CONTÁCTANOS AHORA!
        </Link>
      </div>

      <FooterLanding />
    </div>
  );
};

export default Index;
