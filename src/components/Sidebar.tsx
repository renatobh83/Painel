import axios from "axios";
import { useRef, useState } from "react";

export function Sidebar() {
  const [dataOfApi, setDataOfApi] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);
  const handleSearch = async () => {
    const { data } = await axios.get(
      `http://localhost:3333?q=${searchRef.current.value}`
    );
    setDataOfApi(data);
  };
  return (
    <>
      <div className="flex gap-2">
        <input
          ref={searchRef}
          className="p-2 text-g9 rounded outline-orange-200 border-none"
          type="search"
          name="youtube"
          id="youtube"
          placeholder="Pesquisa"
        />
        <button onClick={handleSearch}> Busca</button>
      </div>
      <div>{JSON.stringify({ dataOfApi }, null, 2)}</div>
    </>
  );
}
