import prisma from '@/lib/db';

import Pagination from '@/app/components/Pagination';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Prédicas | Iglesia Cristiana del Príncipe de Paz',
};

export default async function Page(props) {
  const searchParams = await props.searchParams;
  const itemsPerPage = 10;
  const currentPage = searchParams.page ?? 1;

  const predicasCount = await prisma.predica.count();
  const pagesCount = Math.ceil(predicasCount / itemsPerPage);

  const predicas = await prisma.predica.findMany({
    take: itemsPerPage,
    skip: itemsPerPage * (currentPage - 1),
    orderBy: {
      fecha: 'desc',
    },
  });

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
    <>
      <h1 className="mt-8 text-center text-3xl font-bold">Prédicas</h1>
      <div className="mx-auto max-w-[1000px]">{predicasList}</div>
      <Pagination
        total={pagesCount}
        current={currentPage}
        href={'/predicas?page='}
      />
    </>
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
