import { Dash } from "../components/Dash";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
export function Home() {
  return (
    <div className="text-zinc-50 flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1 flex-col 800:flex-row">
        <Dash />
        <div className="p-5">
          <aside className="lg:w-[348px] 800:w-[200px] w-full bg-gray-700 p-6 border-gray-600 h-[80vh] ">
            <Sidebar />
          </aside>
        </div>
      </main>
    </div>
  );
}
