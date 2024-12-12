import Link from 'next/link';

import { signOut } from '@/auth';

export default function Header() {
  return (
    <header>
      <Link href="/admin">Inicio</Link>
      <Link href="/admin/predicas">Prédicas</Link>
      <form
        action={async () => {
          'use server';
          await signOut();
        }}
      >
        <button>Cerrar sesión</button>
      </form>
    </header>
  );
}
