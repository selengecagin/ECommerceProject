import React from "react";

export default function VideoCard() {
  return (
    <section className="relative flex justify-center py-28">
      <video className="h-full w-full rounded-lg" controls>
        <source
          src="https://docs.material-tailwind.com/demo.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}
