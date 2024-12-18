import prisma from '@/lib/db';
import { revalidatePath } from 'next/cache';

export default async function Page() {
  const predicas = await prisma.predica.findMany({
    orderBy: {
      fecha: 'desc',
    },
  });

  const createPredica = async (formData) => {
    'use server';

    const createdPredica = await prisma.predica.create({
      data: {
        titulo: formData.get('titulo'),
        predicador: formData.get('predicador'),
        fecha: new Date(formData.get('fecha') + 'T05:00:00.000Z'),
        url: formData.get('url'),
      },
    });

    revalidatePath('/admin/predicas');
  };

  const deletePredica = async (formData) => {
    'use server';

    const deletedPredica = await prisma.predica.delete({
      where: {
        id: +formData.get('id'),
      },
    });

    revalidatePath('/admin/predicas');
  };

  const predicasTable = predicas.map((predica) => {
    return (
      <tr key={predica.id}>
        <td>{predica.id}</td>
        <td>{predica.titulo}</td>
        <td>{predica.predicador}</td>
        <td>{predica.fecha.toLocaleDateString('es-PE')}</td>
        <td>{predica.url}</td>

        <td>
          <form action={deletePredica}>
            <input type="hidden" name="id" value={predica.id} />
            <button>Borrar</button>
          </form>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <h1>Prédicas</h1>

      <form action={createPredica}>
        <label htmlFor="titulo">Título</label>
        <input type="text" name="titulo" />

        <label htmlFor="predicador">Predicador</label>
        <input type="text" name="predicador" />

        <label htmlFor="fecha">Fecha</label>
        <input type="date" name="fecha" />

        <label htmlFor="url">URL</label>
        <input type="text" name="url" />

        <button>Añadir</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>TÍTULO</th>
            <th>PREDICADOR</th>
            <th>FECHA</th>
            <th>URL</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{predicasTable}</tbody>
      </table>
    </div>
  );
}
