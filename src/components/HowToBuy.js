import React from "react";

const StepCard = (props) => {
  const { step, content } = props;

  return (
    <div className="relative flex justify-center">
      <div className="bg-[#333] w-[80%] absolute -translate-y-1/2 py-3 rounded-xl text-center text-2xl">
        Step {step}
      </div>
      <div className="bg-white px-10 py-20 w-full rounded-xl text-black text-xl md:text-3xl">
        {content}
      </div>
    </div>
  );
};

export default function HowToBuy() {
  return (
    <div className="w-full mx-auto">
      <div className="flex flex-col gap-10 max-w-[1280px] py-20 mx-auto px-5 md:px-0">
        <div className="col-span-1 md:col-span-2 flex justify-center mb-10">
          <h1 className="text-4xl md:text-8xl font-black font-katana">HOW TO BUY</h1>
        </div>
        <div className="flex flex-col gap-10 justify-center items-center">
          <p className="text-2xl md:text-4xl bg-[#FFB400] w-[50%] text-center py-2 rounded-xl align-middle">DOWNLOAD METAMASK</p>
          <p className="text-2xl md:text-4xl bg-[#FFB400] w-[50%] text-center py-2 rounded-xl align-middle">LOAD SOME ETH ON BASE</p>
          <p className="text-2xl md:text-4xl bg-[#FFB400] w-[50%] text-center py-2 rounded-xl align-middle">SWAP ETH FOR CHONKE</p>
        </div>
      </div>
    </div>
  );
}
