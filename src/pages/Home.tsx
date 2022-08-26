import { Dash } from "../components/Dash";
import { Header } from "../components/Header";
export function Home() {
  return (
    <div className="text-zinc-50 flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        <Dash />
        <aside className="w-[348px] bg-gray-700 p-6 border-gray-600">
          ....
        </aside>
      </main>
    </div>
  );
}
