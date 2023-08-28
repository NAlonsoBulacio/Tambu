import React from "react";
import YouTubeVideo from "./YoutubeVideo";

function Youtube() {
  return (
    <div className="flex flex-col items-center h-screen">
      <h1 className="text-2xl font-semibold mb-4">Nuestra comunidad trabajando para usted</h1>
      <YouTubeVideo videoId="iqigZt2NQqY" />
    </div>
  );
}

export default Youtube;