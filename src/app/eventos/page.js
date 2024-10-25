const eventos = [
  {
    titulo: 'Festival para la Familia',
    fecha: '01/11/2024',
    lugar: 'Centro Villa Real',
    lugarUrl: 'https://maps.app.goo.gl/gVQuvh3StQvLkDBc7',
  },
  {
    titulo: 'Campamento 2025: Camino a la Victoria',
    fecha: '01/01/2025 - 03/01/2025',
    lugar: 'Playa Lurinchincha, Chincha',
  },
];

export default function Page() {
  const eventosList = eventos.map((evento) => {
    return <EventoCard evento={evento} />;
  });

  return (
    <>
      <h1 className="mt-8 text-center text-3xl font-bold">Eventos</h1>
      <div className="mx-auto max-w-[1000px]">{eventosList}</div>
    </>
  );
}

function EventoCard({ evento }) {
  return (
    <div className="m-4 bg-white p-4">
      <p className="font-bold">{evento.titulo}</p>

      <p className="text-sm">
        {evento.fecha}
        {' · '}
        <a href={evento.lugarUrl} target="_blank">
          {evento.lugar} {evento.lugarUrl ? '(abrir en Google Maps)' : ''}
        </a>
      </p>
    </div>
  );
}
