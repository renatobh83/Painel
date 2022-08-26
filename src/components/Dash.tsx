import { Video } from "./Video";

export function Dash() {
  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full aspect-video flex place-items-center place-content-center">
          <Video />
        </div>
      </div>
      <div className="p-8 max-w-[1100px] mx-auto"></div>
    </div>
  );
}
