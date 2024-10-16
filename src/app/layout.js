import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Credit from './components/Credit';

export const metadata = {
  title: 'Iglesia Cristiana del Príncipe de Paz',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-slate-200 pt-16">
        <Header />
        {children}
        <Footer />
        <Credit />
      </body>
    </html>
  );
}
