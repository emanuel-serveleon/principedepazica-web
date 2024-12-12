import '@/app/globals.css';

import Header from '@/app/(main)/components/Header';
import Footer from '@/app/(main)/components/Footer';
import Credit from '@/app/components/Credit';

export const metadata = {
  title: 'Iglesia Cristiana del Príncipe de Paz',
  description: 'Nacidos del corazón de Dios',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="flex min-h-screen flex-col justify-between bg-slate-200 pt-16">
        <Header />
        <main className="flex-auto">{children}</main>
        <Footer />
        <Credit />
      </body>
    </html>
  );
}
