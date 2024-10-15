import './globals.css';
import Header from './components/Header';

export const metadata = {
  title: 'Iglesia Cristiana del Príncipe de Paz',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-slate-200">
        <Header />
        {children}
      </body>
    </html>
  );
}
