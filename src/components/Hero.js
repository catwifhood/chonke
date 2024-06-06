import React from "react";

export default function Hero() {
  return (
    <div className="flex items-center justify-center px-5 md:px-20 py-10 md:py-0 md:h-[80vh]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-[1280px]">
        <div className="flex flex-col gap-10 items-center justify-center">
          <h1 className="text-6xl md:text-8xl font-black font-katana">$CHONKE</h1>
          <p className="text-2xl md:text-4xl text-center max-w-[500px]">
            Zhey cwall me CHONKE, zhee chinese PONKE.
          </p>
        </div>
        <div>
          <img src="/image 10.png" alt="image" className="rounded-2xl" />
        </div>
      </div>
    </div>
  );
}
