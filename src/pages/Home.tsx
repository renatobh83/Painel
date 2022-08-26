import { Link } from "react-router-dom";
export function Home() {
  return (
    <div className="text-zinc-50 flex w-full">
      <div className="flex-1">Videos</div>
      <div className="800:w-60 w-44">Sidebar</div>
      <Link to="/about"> About</Link>
    </div>
  );
}
