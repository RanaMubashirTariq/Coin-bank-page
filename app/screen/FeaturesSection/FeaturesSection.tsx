import React from "react";

export default function FeaturesSection  ()  {
  const verticalLines = [
    { src: "/Line-99.png" },
    { src: "/Line-99.png" },
    { src: "/Line-99.png" },
    { src: "/Line-99.png" },
    { src: "/Line-99.png" },
    { src: "/Line-103.png", className: "mr-[-1.00px]" },
  ];

  return (
    <section className="gap-16 max-[767px]:gap-[30px] pt-[100px] max-[1000px]:pt-10  pb-0 px-40 max-[1300px]:px-[50px] max-[767px]:px-[25px] bg-[linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(239,237,253,1)_67%,rgba(255,255,255,1)_100%)] flex flex-col items-center relative w-full">
      <div className="inline-flex h-[964px] max-[1100px]:h-[764px] max-[767px]:h-[600px] w-[1120px] max-[1300px]:w-[1050px] max-[1100px]:w-[824px] 
    max-[1000px]:w-[80%] items-start gap-56 absolute top-0 left-40 max-[1300px]:left-[100px] 
    max-[1000px]:left-[50px] z-10 -rotate-180">
        {verticalLines.map((line, index) => (
          <img
            key={`line-${index}`}
            className={`self-stretch w-px rotate-180 relative object-cover ${line.className || ""}`}
            alt="Line"
            src={line.src}
          />
        ))}
      </div>

      <img
    className="absolute w-[1120px] max-[1300px]:w-[1050px] max-[1100px]:w-[824px] 
      max-[1000px]:w-[78%] max-[860px]:w-[75%] max-[570px]:w-[60%]  max-[767px]:h-[200px] h-[460px] top-[216px] max-[1000px]:top-[100px] left-40 max-[1300px]:left-[100px] 
      max-[1000px]:left-[100px]"
    alt="Pattern"
    src="/Pattern.png"
  />

      <header className="flex-col items-center gap-4 inline-flex relative w-[600px] z-10 max-[767px]:w-[100%]">
        <div className="w-fit text-[#5235e8] text-[14px] max-[1000px]:text-[13px] text-center  tracking-[4%] leading-[140%] whitespace-nowrap relative mt-[-1.00px] font:['Aeonik'] font-medium">
          FEATURES
        </div>

        <h2 className="font-['Aeonik'] font-medium text-[40px] max-[1000px]:text-[36px] max-[767px]:text-[28px] text-center leading-[140%] tracking-[-1%] text-[#0e0637]">
          Get a bird&apos;s eye view of your crypto investments
        </h2>

        <p className="font-['Aeonik'] font-medium text-[16px] max-[767px]:text-[14px] text-center leading-[160%] tracking-[0.5%] text-[#717184]">
          Keep up on all the latest trends in the crypto industry and stay ahead
          of the market.
        </p>
      </header>

      <img
    className="z-11 w-[1120px] max-[1300px]:w-[1050px] max-[1100px]:w-[824px] 
      max-[1000px]:w-[100%] h-[584px] max-[1300px]:h-auto rounded-2xl object-contain"
    alt="Dashboard"
    src="/dashboard.png"
  />
    </section>
  );
};
