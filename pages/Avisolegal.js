import React from 'react';
import NavbarPrincipal from '@/components/NavbarPrincipal';
import FooterLanding from '@/components/FooterLanding';

export default function Avisolegal() {
  return (
    <div>
      <NavbarPrincipal />

      <div className="px-[200px] pt-10 max-[1094px]:px-[100px] max-[778px]:px-[50px] max-[516px]:px-[20px] pb-20">
        <h1 className="text-xl font-bold mb-4">Aviso Legal</h1>
        
        <h2 className="text-lg font-semibold mb-2">Rosa Isabel Recio</h2>
        <p className="mb-2">Taxagest, responsable del sitio web, pone a disposición de los usuarios el presente documento, con el que pretende dar cumplimiento a las obligaciones dispuestas en la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSICE), BOE N º 166, así como informar a todos los usuarios del sitio web respecto a cuáles son las condiciones de uso.</p>
        <p className="mb-2">Toda persona que acceda a este sitio web asume el papel de usuario, comprometiéndose a la observancia y cumplimiento riguroso de las disposiciones aquí dispuestas, así como a cualquier otra disposición legal que fuera de aplicación.</p>
        <p className="mb-2">Taxagest se reserva el derecho de modificar cualquier tipo de información que pudiera aparecer en el sitio web, sin que exista obligación de preavisar o poner en conocimiento de los usuarios dichas obligaciones, entendiéndose como suficiente con la publicación en el sitio web de https://www.taxagest.es/</p>

        <h2 className="text-lg font-semibold mb-2">DATOS IDENTIFICATIVOS</h2>
        <p className="mb-2">Nombre de dominio: https://www.taxagest.es/</p>
        <p className="mb-2">Nombre comercial: Taxagest</p>
        <p className="mb-2">Denominación social: Rosa Isabel Recio</p>
        <p className="mb-2">NIF: 47623629J</p>
        <p className="mb-2">Domicilio social: Carrer Balmes n3 1r 2na</p>
        <p className="mb-2">Email: administracion@taxagest.com</p>

        <h2 className="text-lg font-semibold mb-2">DERECHOS DE PROPIEDAD INTELECTUAL E INDUSTRIAL</h2>
        <p className="mb-2">El sitio web, incluyendo a título enunciativo pero no limitativo su programación, edición, compilación y demás elementos necesarios para su funcionamiento, los diseños, logotipos, texto y/o gráficos, son propiedad de Taxagest o, si es el caso, dispone de licencia o autorización expresa por parte de los autores.</p>
        <p className="mb-2">Todos los contenidos del sitio web se encuentran debidamente protegidos por la normativa de propiedad intelectual e industrial, así como inscritos en los registros públicos correspondientes.</p>
        <p className="mb-2">Independientemente de la finalidad para la que fueran destinados, la reproducción total o parcial, uso, explotación, distribución y comercialización, requiere en todo caso de la autorización escrita previa por parte de Taxagest. Cualquier uso no autorizado previamente se considera un incumplimiento grave de los derechos de propiedad intelectual o industrial del autor.</p>
        <p className="mb-2">Los diseños, logotipos, texto y/o gráficos ajenos a Taxagest y que pudieran aparecer en el sitio web, pertenecen a sus respectivos propietarios, siendo ellos mismos responsables de cualquier posible controversia que pudiera suscitarse respecto a los mismos.</p>
        <p className="mb-2">Taxagest reconoce a favor de sus titulares los correspondientes derechos de propiedad intelectual e industrial, no implicando su sola mención o aparición en el sitio web la existencia de derechos o responsabilidad alguna sobre los mismos, como tampoco respaldo, patrocinio o recomendación por parte del mismo.</p>
        <p className="mb-2">Para realizar cualquier tipo de observación respecto a posibles incumplimientos de los derechos de propiedad intelectual o industrial, así como sobre cualquiera de los contenidos del sitio web, puede hacerlo a través del correo electrónico https://www.taxagest.es/</p>

        <h2 className="text-lg font-semibold mb-2">EXENCIÓN DE RESPONSABILIDADES</h2>
        <p className="mb-2">Taxagest se exime de cualquier tipo de responsabilidad derivada de la información publicada en su sitio web siempre que esta información haya sido manipulada o introducida por un tercero ajeno al mismo.</p>

        <h2 className="text-lg font-semibold mb-2">CONTENIDO DE LA WEB Y ENLACES (LINKS)</h2>
        <p className="mb-2">Taxagest se reserva el derecho a actualizar, modificar o eliminar la información contenida en sus páginas web pudiendo incluso limitar o no permitir el acceso a dicha información a ciertos usuarios.</p>
        <p className="mb-2">Taxagest no asume responsabilidad alguna por la información contenida en páginas web de terceros a las que se pueda acceder por “links” o enlaces desde cualquier página web.</p>
        <p className="mb-2">La presencia de “links” o enlaces en las páginas web de https://www.taxagest.es/ tiene finalidad meramente informativa y en ningún caso supone sugerencia, invitación o recomendación sobre los mismos.</p>
      </div>

      <FooterLanding />
    </div>
  );
}