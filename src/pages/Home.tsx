import { Link } from "react-router-dom";
import { Dash } from "../components/Dash";
import { Header } from "../components/Header";
export function Home() {
  return (
    <div className="text-zinc-50 flex min-h-screen w-screen flex-col">
      <Header />
      <Dash />
    </div>
  );
}
