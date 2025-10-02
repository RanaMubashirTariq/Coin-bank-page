import React from "react";

export default function FeaturesListSection  () {
  const verticalLines = [
    { src: "/Line-102.png", marginRight: "" },
    { src: "/Line-102.png", marginRight: "" },
    { src: "/Line-102.png", marginRight: "" },
    { src: "/Line-102.png", marginRight: "" },
    { src: "/Line-102.png", marginRight: "" },
    { src: "/Line-103-3.png", marginRight: "mr-[-1.00px]" },
  ];

  return (
    <section className="justify-center gap-20 max-[1000px]:pt-10 max-[1000px]:gap-15 max-[767px]:gap-[30px] pt-[100px] pb-12 max-[767px]:pb-2 px-40 max-[1300px]:px-[50px] max-[767px]:px-[25px] overflow-hidden bg-[linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(239,237,253,1)_92%)] flex flex-col items-center relative w-full">
      <div className="inline-flex h-[964px] max-[1100px]:h-auto  items-start gap-56    absolute top-0 left-40 -rotate-180">
        {verticalLines.map((line, index) => (
          <img
            key={`line-${index}`}
            className={`self-stretch w-px rotate-180 relative object-cover ${line.marginRight}`}
            alt="Line"
            src={line.src}
          />
        ))}
      </div>

      <img
        className="absolute w-[950px] h-[578px] max-[767px]:h-auto  max-[1100px]:left-[300px] top-0 left-[490px]"
        alt="Pattern"
        src="/Pattern-1.png"
      />

      <header className="flex-col items-center gap-4 inline-flex relative z-10">
        <div className="w-fit text-[#5235e8] font-medium text-base max-[1500px]:text-[14px] max-[1000px]:text-[13px] max-[767px]:text-[12px] max-[767px]:leading-[120%] tracking-[0.56px] leading-[19.6px] whitespace-nowrap relative font-['Aeonik'] font-medium">
          FEATURES
        </div>

        <h2 className="relative w-fit  max-[767px]:w-[100%] text-center text-[#0e0637] font-medium font-['Aeonik'] text-[48px] max-[1500px]:text-[40px]  max-[1000px]:text-[36px] max-[767px]:text-[28px] max-[767px]:leading-[120%] leading-[140%] tracking-[-1%]">
          Many type of Blockchains
        </h2> 

        <p className="w-[544px] max-[767px]:w-[100%]  text-center text-[#717184] font-medium font-['Aeonik'] text-[18px] max-[1500px]:text[16px] max-[767px]:text-[14px] max-[767px]:leading-[150%] leading-[160%] tracking-[0.5%]">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
      </header>

      <img
        className="relative w-[1300px] h-[210px] max-[1500px]:w-[1120px] max-[1500px]:h-[164px] max-[767px]:h-auto z-10 max-[500px]:border rounded-full max-[500px]:border-black/6"
        alt="Illustration"
        src="/illustration-1.png"
      />
    </section>
  );
};
