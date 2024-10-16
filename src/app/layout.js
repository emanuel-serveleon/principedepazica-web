import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata = {
  title: 'Iglesia Cristiana del Príncipe de Paz',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-slate-200">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
