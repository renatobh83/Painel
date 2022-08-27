import { useParams } from "react-router-dom";

export function Video() {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="w-full h-full">
      {slug ? (
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${slug}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <div className="flex-1 text-zinc-50"></div>
      )}
    </div>
  );
}
