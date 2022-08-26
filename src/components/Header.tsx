import { Link } from "react-router-dom";

export function Header() {
  return (
    <div className="p-5 bg-gray-800 w-screen flex gap-4">
      <Link to="/">Home</Link>
      <Link to="/about">Sobre</Link>
    </div>
  );
}
