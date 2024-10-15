import './globals.css';

export const metadata = {
  title: 'Iglesia Cristiana del Príncipe de Paz',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
