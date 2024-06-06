import React from "react";

export default function About() {
  return (
    <div className="overflow-hidden bg-[#B92B2A] max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-44 items-center justify-center md:p-20 py-10">
      <div className="space-y-2 text-center">
        <h1 className="text-4xl md:text-8xl font-katana">ABOUT</h1>
        <p className="text-2xl md:text-4xl">Meet CHONKE. Inspired by the famous, PONKE, combined with the rich elements and spirit of Chinese culture. Join the CHONKE revolution.</p>
      </div>
      <div className="w-[300px] mx-auto md:mx-0">
        <img src="/image 5.png" alt="image" />
      </div>
    </div>
  );
}
