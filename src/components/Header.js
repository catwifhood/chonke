import React from "react";

export default function Header() {
  return (
    <div className="px-20 py-10 flex md:flex-row flex-col justify-between items-center gap-10 text-white">
      <h1 className="text-2xl font-bold">CA: COMING SOON</h1>
      <div className="flex-grow md:block hidden" />
      <div className="flex gap-5 justify-center items-center rounded-lg bg-white/30 p-5 py-2 border border-white">
        <a
          href="https://t.me/unoreversesolana"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/telegram.png" alt="image" className="w-10 h-10" />
        </a>
        <a href="https://x.com/unoreverse_sol" target="_blank" rel="noreferrer">
          <img src="/x.png" alt="image" className="w-10 h-10" />
        </a>
        <a>
          <img src="/pill.png" alt="image" className="w-10 h-10" />
        </a>
      </div>
    </div>
  );
}