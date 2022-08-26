export function Video() {
  return (
    <iframe
      className="w-full h-full"
      src="https://www.youtube.com/embed/e0e66K1am0A"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
}
