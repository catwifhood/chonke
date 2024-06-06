import React from "react";

export default function Header() {
  return (
    <div className="px-20 py-10 flex md:flex-row flex-col justify-between items-center gap-10 text-white">
      <div className="flex-grow md:block hidden" />
      <div className="flex gap-5 justify-center items-center rounded-lg bg-white/30 p-5 py-2 border border-white">
        <a href="https://t.me/chonkesolana" target="_blank" rel="noreferrer">
          <img src="/telegram.png" alt="image" className="w-10 h-10" />
        </a>
        <a href="https://x.com/ChonkeOnSolana" target="_blank" rel="noreferrer">
          <img src="/x.png" alt="image" className="w-10 h-10" />
        </a>
        <a href="https://pump.fun/HEyYUg7zW89buR4bryY4EDDsCQzsqDJW62GBPSampump" target="_blank" rel="noreferrer">
          <img src="/pill.png" alt="image" className="w-10 h-10" />
        </a>
      </div>
    </div>
  );
}
