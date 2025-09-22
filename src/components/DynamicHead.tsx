// components/DynamicHead.tsx
import { Helmet } from 'react-helmet-async';

const metaData = {
  pasofirme: {
    title: "Paso Firme a Secundaria | Taller Internacional para Preadolescentes",
    description: "El taller internacional que fortalece lo que no enseña la escuela. Para preadolescentes de 11 a 13 años que están por comenzar secundaria.",
  },
  descubriendo: {
    title: "Descubriendo Mi Potencial | El taller que transforma distracción en enfoque",
    description: "Una experiencia práctica y en vivo donde los adolescentes aprenden a enfocarse, dejar de postergar y usar el celular con estrategia. Diseñado especialmente para jóvenes entre 12 y 21 años que necesitan dirección y motivación.",
  },
  soycapaz: {
    title: "¡Soy Capaz! | Taller habilidades para la vida adolescente",
    description: "¿Tu hijo adolescente está cada vez más desconectado de sus emociones, su motivación y de ti? Este curso online es ese empujón que necesita para reconectarse con lo que importa y afrontar la adolescencia con confianza y herramientas emocionales reales.",
  },
  conexion: {
    title: "Del Caos a la Conexión | Programa para padres de adolescentes",
    description:
      "¿Tu hijo adolescente se ha alejado y ya no sabés cómo comunicarte? Este programa online te guía paso a paso para reconectar emocionalmente, recuperar la confianza y transformar tu vínculo familiar con herramientas prácticas, apoyo constante y resultados reales.",
  },
  ebook: {
    title: "Límites en la Adolescencia | Guía práctica y emocional para padres",
    description: "Una guía firme y clara para poner límites sin gritar, sin ceder y sin romper la conexión con tu hijo adolescente. Incluye PDF, audio y hoja imprimible.",
  },
  pubertad: {
    title: "Pubertad y Adolescencia Sin Miedo | Taller para Padres",
    description: "Lo que toda mamá o papá necesita saber antes de que la relación se fracture. Una guía para acompañar con claridad, conexión y sin gritos durante la pubertad y adolescencia de tus hijos.",
  },
};

export const DynamicHead = ({ taller = "pasofirme" }: { taller?: string }) => {
  const data = metaData[taller] ?? metaData["pasofirme"];

  return (
    <Helmet>
      <title>{data.title}</title>
      <meta name="description" content={data.description} />
    </Helmet>
  );
};
