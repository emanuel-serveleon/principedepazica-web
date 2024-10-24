import prisma from '../../lib/db';

export const metadata = {
  title: 'Prédicas | Iglesia Cristiana del Príncipe de Paz',
};

export default async function Page() {
  const predicas = await prisma.predica.findMany();

  const predicasList = predicas.map((predica) => {
    return (
      <PredicaCard
        title={predica.titulo}
        speaker={predica.predicador}
        date={predica.fecha.toLocaleDateString('es-PE')}
        url={predica.url}
        key={predica.id}
      />
    );
  });

  return (
    <main>
      <h1 className="mt-8 text-center text-3xl font-bold">Prédicas</h1>
      <div className="mx-auto max-w-[1000px]">{predicasList}</div>
    </main>
  );
}

function PredicaCard(props) {
  return (
    <div className="m-4 flex h-[100px] items-center bg-white">
      <a
        href={props.url}
        className="flex h-full w-[100px] flex-none items-center bg-slate-100 p-4 text-center text-xs hover:bg-slate-300"
        target="_blank"
      >
        Ver en YouTube
      </a>
      <div className="p-4">
        <a href={props.url} className="font-bold" target="_blank">
          {props.title}
        </a>
        <p className="text-sm">
          {props.speaker} · {props.date}
        </p>
      </div>
    </div>
  );
}
