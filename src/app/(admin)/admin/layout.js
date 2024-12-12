import { auth } from '@/auth';

import Header from '@/app/(admin)/admin/components/Header';
import LoginForm from '@/app/(admin)/admin/components/Login';

export const metadata = {
  title: 'Admin | Iglesia Cristiana del Príncipe de Paz',
};

export default async function RootLayout({ children }) {
  const session = await auth();

  if (!session) {
    return (
      <html lang="es">
        <body>
          <LoginForm />
        </body>
      </html>
    );
  }

  return (
    <html lang="es">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
