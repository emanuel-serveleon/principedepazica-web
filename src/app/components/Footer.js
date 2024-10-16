import logo from '../assets/logo.svg';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="flex items-center justify-center gap-5 p-12">
      <Image src={logo} width={100} height={100} alt="" />
      <div>
        <p className="text-2xl font-bold">
          Iglesia Cristiana del Príncipe de Paz
        </p>
        <p>Pasaje Diaz 132 - Ica, Perú</p>
      </div>
    </footer>
  );
}
