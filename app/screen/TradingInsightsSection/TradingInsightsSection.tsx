import React from "react";
import { Card, CardContent } from "../../components/ui/card";

export default function TradingInsightsSection  () {
  const cryptoIcons = [
    { src: "/crypto.png", alt: "Crypto", zIndex: "z-40", size: "w-12 h-12" },
    { src: "/crypto-2.png", alt: "Crypto", zIndex: "z-30", size: "w-[50px] h-[50px]", marginLeft: "-ml-1" },
    { src: "/crypto-3.png", alt: "Crypto", zIndex: "z-20", size: "w-12 h-12", marginLeft: "-ml-1" },
    { src: "/crypto-1.png", alt: "Crypto", zIndex: "z-10", size: "w-12 h-12", marginLeft: "-ml-1" },
    { src: "/crypto-5.png", alt: "Crypto", zIndex: "z-0", size: "w-12 h-12", marginLeft: "-ml-1" },
  ];
  

  return (
    <section className="flex flex-col items-center justify-center gap-2 relative self-stretch w-full max-[1100px]:px-[50px] max-[767px]:px-[25px] flex-[0_0_auto] bg-[#f7f5fd]">
      <Card className="inline-flex items-center max-[767px]:justify-center gap-6 px-[212px] max-[767px]:w-[100%] max-[1100px]:px-[100px] max-[1000px]:px-[50px] py-12 relative flex-[0_0_auto] bg-[#0e0637] rounded-3xl max-[767px]:rounded-2xl overflow-hidden border-0">
        <img
          className="absolute w-[726px] h-40 max-[900px]:h-full max-[900px]:w-[526px] top-0 right-[0px]"
          alt="Pattern"
          src="/pattern-2.png"
        />

        <CardContent className="p-0 flex items-center max-[767px]:flex-col max-[767px]:gap-5 max-[350px]:mr-[40px]">
          <div className="inline-flex items-center relative flex-[0_0_auto] max-[767px]:ml-[50px] max-[500px]:ml-[0px]">
            {cryptoIcons.map((icon, index) => (
              <img
                key={`crypto-icon-${index}`}
                className={`relative ${icon.size} ${icon.marginLeft} ${icon.zIndex}`}
                alt={icon.alt}
                src={icon.src}
              />
            ))}

            <div className="relative w-12 h-12 -ml-1 z-[-2]">
              <img
                className="absolute w-[50px] h-[50px] -top-px -left-px"
                alt="Gemini dollar GUSD"
                src="/gemini-dollar--gusd-.png"
              />
            </div>
          </div>

          <div className="items-center gap-2 inline-flex relative flex-[0_0_auto] max-[900px]:flex-col">
            <div className="relative w-[200px] max-[767px]:w-[100%] font-['Aeonik'] max-[500px]:text-center max-[350px]:ml-[30px] font-medium text-[20px] text-white leading-[160%] tracking-[-0.5%]">
              Trade more than 50+ cryptocurrencies
            </div>

             <div className="flex items-center gap-[8px]">
             <img className="relative w-8 h-8" alt="Frame" src="/frame.png" />
 
              <div className="relative w-fit font-['Aeonik'] font-regular text-[16px] max-[767px]:text-[14px] text-white leading-[160%] tracking-[0.5%] text-[#c8c8d0]  whitespace-nowrap">
                New assets added regularly
              </div>
             </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
