import axios from "axios";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

export function Sidebar() {
  const [dataOfApi, setDataOfApi] = useState<{ items: any[] }>(null);
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
          className="p-2 text-g9 rounded"
          type="search"
          name="youtube"
          id="youtube"
          placeholder="Pesquisa"
        />
        <button onClick={handleSearch}> Busca</button>
      </div>
      {dataOfApi &&
        dataOfApi.items.map((item) => (
          <div
            key={item.etag}
            className="flex flex-col text-sm gap-2 py-3 mt-3 "
          >
            <Link to={`/video/${item.id.videoId}`}>{item.snippet.title}</Link>
          </div>
        ))}
    </>
  );
}
