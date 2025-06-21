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
  title: "¡Soy Capaz! | Taller habilidades para la vida",
  description: "¿Tu hijo adolescente está cada vez más desconectado de sus emociones, su motivación y de ti? Este curso online es ese empujón que necesita para reconectarse con lo que importa y afrontar la adolescencia con confianza y herramientas emocionales reales."
}

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
