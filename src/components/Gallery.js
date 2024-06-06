import React from "react";

export default function Gallery() {
  return (
    <div>
      <div className="flex flex-col gap-4 overflow-hidden">
        <div className="flex gap-4">
          <img src="/image 6.png" alt="image" className="max-w-full w-[499px] h-auto" />
          <img src="/image 7.png" alt="image" className="max-w-full w-[724px] h-auto" />
          <img src="/image 8.png" alt="image" className="max-w-full w-[] h-auto" />
        </div>
        <div className="flex gap-4">
          <img src="/image 5 (2).png" alt="image" className="max-w-full w-[] h-auto" />
          <img src="/image 9.png" alt="image" className="max-w-full w-[] h-auto" />
          <img src="/image 11 (1).png" alt="image" className="max-w-full w-[] h-auto" />
          <img src="/image 10 (1).png" alt="image" className="max-w-full w-[] h-auto" />
        </div>
      </div>
    </div>
  );
}
