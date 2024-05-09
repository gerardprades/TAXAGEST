import Link from "next/link";

export default function FooterLanding() {
  return (
    <div className="bg-gris-influendedores text-center pt-5 pb-5 max-[640px]:text-[11px]">
      © 2024 TAXAGEST. Página web con todos los derechos reservados. Propiedad de
      Rosa Isabel Recio Daga

      <div className="flex justify-center gap-[90px] pt-4">

<Link href="Privacidad" className="underline font-bold">Política de privacidad</Link>
<Link href="Avisolegal" className="underline font-bold">Aviso Legal</Link>
<Link href="Politica" className="underline font-bold">Política de Cookies</Link>
      </div>
    </div>
  );
}
