import Link from 'next/link';
import Image from 'next/image';
import logo from '../assets/logo.svg';

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-white px-4 py-2">
      <Link href="/">
        <Image
          src={logo}
          width={48}
          height={48}
          alt="Iglesia Cristiana del Príncipe de Paz"
        />
      </Link>

      <nav>
        <ul className="flex items-center">
          <NavLink href="/" name="Inicio" />
        </ul>
      </nav>
    </header>
  );
}

function NavLink(props) {
  return (
    <li>
      <Link href={props.href} className="mx-2 border-black p-2 hover:border-b">
        {props.name}
      </Link>
    </li>
  );
}
