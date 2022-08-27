import { Link } from "react-router-dom";
import Logo from "./Logo";

export function Header() {
  return (
    <div className="p-5 bg-gray-800 w-screen flex items-center  justify-between gap-5 text-g1">
      <Link to="/">
        <Logo className="w-[80px]" />
      </Link>
      <nav className="flex gap-4 items-center">
        <a href="#/">Inicio</a>
        <a href="#/about">Sobre</a>
      </nav>
    </div>
  );
}
