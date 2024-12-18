import Image from 'next/image';

import img1 from '/public/celebracion.jpg';
import img2 from '/public/jovenes.jpg';
import img3 from '/public/escuela.jpg';

export default function Page() {
  return (
    <>
      <section className="-mt-16 flex h-screen flex-col justify-center bg-slate-200 p-10">
        <h1 className="m-5 text-center text-5xl font-bold">
          Iglesia Cristiana del Príncipe de Paz
        </h1>
        <p className="text-center text-2xl">Nacidos del corazón de Dios</p>
      </section>

      <section className="bg-slate-100 px-12 py-24">
        <h2 className="mb-10 text-center text-4xl font-bold">
          Reuniones semanales
        </h2>
        <div className="flex flex-wrap justify-center gap-10">
          <ReunionCard
            name="Culto de Celebración"
            date="Domingo 6:30 p. m."
            image={img1}
          />
          <ReunionCard
            name="Culto de Jóvenes"
            date="Sábado 6:30 p. m."
            image={img2}
          />
          <ReunionCard
            name="Escuela de Entrenamiento Ministerial"
            date="Martes 7:00 p. m."
            image={img3}
          />
        </div>
      </section>
    </>
  );
}

function ReunionCard(props) {
  return (
    <div className="w-96 bg-white">
      <Image src={props.image} width={384} height={384} alt="hola" />
      <div className="p-2">
        <p className="text-center font-bold">{props.name}</p>
        <p className="text-center">{props.date}</p>
      </div>
    </div>
  );
}
