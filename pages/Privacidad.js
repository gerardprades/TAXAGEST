import React from 'react';
import FooterLanding from '@/components/FooterLanding';

export default function Privacidad() {
  return (
    <div>
    <div className="px-[200px] pt-10 max-[1094px]:px-[100px] max-[778px]:px-[50px] max-[516px]:px-[20px] pb-20">
      <h2 className="text-xl font-bold mb-4">POLÍTICA DE PRIVACIDAD</h2>
      <h3 className="text-lg font-semibold">INFORMACIÓN AL USUARIO</h3>
      <p className="mb-2">
        Rosa Isabel Recio, en adelante RESPONSABLE, es el Responsable del tratamiento de los datos personales del Usuario y le informa que estos datos serán tratados de conformidad con lo dispuesto en el Reglamento (UE) 2016/679 de 27 de abril de 2016 (GDPR) relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos, por lo que se le facilita la siguiente información del tratamiento:
      </p>
      <p className="mb-2">
        <strong>Fin del tratamiento:</strong> mantener una relación comercial con el Usuario. Las operaciones previstas para realizar el tratamiento son:
      </p>
      <ul className="mb-2 list-disc list-inside">
        <li>Tramitar encargos, solicitudes o cualquier tipo de petición que sea realizada por el usuario a través de cualquiera de las formas de contacto que se ponen a su disposición.</li>
      </ul>
      <p className="mb-2">
        <strong>Criterios de conservación de los datos:</strong> se conservarán mientras exista un interés mutuo para mantener el fin del tratamiento y cuando ya no sea necesario para tal fin, se suprimirán con medidas de seguridad adecuadas para garantizar la seudonimización de los datos o la destrucción total de los mismos.
      </p>
      <p className="mb-2">
        <strong>Comunicación de los datos:</strong> No se comunicarán los datos a terceros salvo obligación legal.
      </p>
      <p className="mb-2">
        <strong>Derechos que asisten al Usuario:</strong>
      </p>
      <ul className="mb-2 list-disc list-inside">
        <li>Derecho a retirar el consentimiento en cualquier momento.</li>
        <li>Derecho de acceso, rectificación, portabilidad y supresión de sus datos y a la limitación u oposición al su tratamiento.</li>
        <li>Derecho a presentar una reclamación ante la autoridad de control (agpd.es) si considera que el tratamiento no se ajusta a la normativa vigente.</li>
      </ul>
      <p className="mb-2">
        <strong>Datos de contacto para ejercer sus derechos:</strong> administracion@taxagest.com
      </p>
      <h3 className="text-lg font-semibold">CARÁCTER OBLIGATORIO O FACULTATIVO DE LA INFORMACIÓN FACILITADA POR EL USUARIO</h3>
      <p className="mb-2">
        Los Usuarios, mediante la marcación de las casillas correspondientes y entrada de datos en los campos, marcados con un asterisco (*) en los formularios de contactos, aceptan expresamente y de forma libre e inequívoca, que sus datos son necesarios para atender su petición, por parte del prestador, siendo voluntaria la inclusión de datos en los campos restantes. El Usuario garantiza que los datos personales facilitados al RESPONSABLE son veraces y se hace responsable de comunicar cualquier modificación de los mismos. El RESPONSABLE informa y garantiza expresamente a los usuarios que sus datos personales no serán cedidos en ningún caso a terceros, y que siempre que realizara algún tipo de cesión de datos personales, se pedirá previamente el consentimiento expreso, informado e inequívoco por parte los Usuarios. Todos los datos solicitados a través del sitio web son obligatorios, ya que son necesarios para la prestación de un servicio óptimo al Usuario. En caso de que no sean facilitados todos los datos, no se garantiza que la información y servicios facilitados sean completamente ajustados a sus necesidades.
      </p>
      <h3 className="text-lg font-semibold">MEDIDAS DE SEGURIDAD</h3>
      <p className="mb-2">
        Que de conformidad con lo dispuesto en las normativas vigentes en protección de datos personales, el RESPONSABLE está cumpliendo con todas las disposiciones de las normativas GDPR para el tratamiento de los datos personales de su responsabilidad, y manifiestamente con los principios descritos en el artículo 5 del GDPR, por los cuales son tratados de manera lícita, leal y transparente en relación con el interesado y adecuados, pertinentes y limitados a lo necesario en relación con los fines para los que son tratados. El RESPONSABLE garantiza que ha implementado políticas técnicas y organizativas apropiadas para aplicar las medidas de seguridad que establecen el GDPR con el fin de proteger los derechos y libertades de los Usuarios y les ha comunicado la información adecuada para que puedan ejercerlos.
      </p>
    </div>
    <FooterLanding/>
    </div>
  );
}