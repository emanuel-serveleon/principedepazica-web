import prisma from '@/lib/db';

export default async function Page() {
  const predicas = await prisma.predica.findMany({
    orderBy: {
      fecha: 'desc',
    },
  });

  const predicasTable = predicas.map((predica) => {
    return (
      <tr>
        <td>{predica.id}</td>
        <td>{predica.titulo}</td>
        <td>{predica.predicador}</td>
        <td>{predica.fecha.toLocaleDateString('es-PE')}</td>
        <td>{predica.url}</td>
      </tr>
    );
  });

  return (
    <div>
      <h1>Prédicas</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>TÍTULO</th>
            <th>PREDICADOR</th>
            <th>FECHA</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>{predicasTable}</tbody>
      </table>
    </div>
  );
}
