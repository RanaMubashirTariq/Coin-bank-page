import React from "react";
import { Card, CardContent } from "../../components/ui/card";

export default function TradingOverviewSection  ()  {
  const backgroundLines = [
    {
      src: "/line-99-1.png",
      className: "self-stretch w-px rotate-180 relative object-cover",
    },
    {
      src: "/line-99-1.png",
      className: "self-stretch w-px rotate-180 relative object-cover",
    },
    {
      src: "/line-99-1.png",
      className: "self-stretch w-px rotate-180 relative object-cover",
    },
    {
      src: "/line-99-1.png",
      className: "self-stretch w-px rotate-180 relative object-cover",
    },
    {
      src: "/line-99-1.png",
      className: "self-stretch w-px rotate-180 relative object-cover",
    },
    {
      src: "/line-103.png",
      className:
        "self-stretch w-px mr-[-1.00px] rotate-180 relative object-cover",
    },
  ];

  const chartLabels = [
    {
      value: "$10k",
      className:
        "relative w-[26px] mt-[-1.00px] font-body-xsmall-regular font-[number:var(--body-xsmall-regular-font-weight)] text-[#707084] text-[length:var(--body-xsmall-regular-font-size)] tracking-[var(--body-xsmall-regular-letter-spacing)] leading-[var(--body-xsmall-regular-line-height)] [font-style:var(--body-xsmall-regular-font-style)]",
    },
    {
      value: "$8k",
      className:
        "relative w-[26px] font-body-xsmall-regular font-[number:var(--body-xsmall-regular-font-weight)] text-[#707084] text-[length:var(--body-xsmall-regular-font-size)] tracking-[var(--body-xsmall-regular-letter-spacing)] leading-[var(--body-xsmall-regular-line-height)] [font-style:var(--body-xsmall-regular-font-style)]",
    },
    {
      value: "$6k",
      className:
        "relative w-[26px] font-body-xsmall-regular font-[number:var(--body-xsmall-regular-font-weight)] text-[#707084] text-[length:var(--body-xsmall-regular-font-size)] tracking-[var(--body-xsmall-regular-letter-spacing)] leading-[var(--body-xsmall-regular-line-height)] [font-style:var(--body-xsmall-regular-font-style)]",
    },
    {
      value: "$4k",
      className:
        "relative w-[26px] font-body-xsmall-regular font-[number:var(--body-xsmall-regular-font-weight)] text-[#707084] text-[length:var(--body-xsmall-regular-font-size)] tracking-[var(--body-xsmall-regular-letter-spacing)] leading-[var(--body-xsmall-regular-line-height)] [font-style:var(--body-xsmall-regular-font-style)]",
    },
    {
      value: "$2k",
      className:
        "relative w-[26px] font-body-xsmall-regular font-[number:var(--body-xsmall-regular-font-weight)] text-[#707084] text-[length:var(--body-xsmall-regular-font-size)] tracking-[var(--body-xsmall-regular-letter-spacing)] leading-[var(--body-xsmall-regular-line-height)] [font-style:var(--body-xsmall-regular-font-style)]",
    },
    {
      value: "0",
      className:
        "relative w-[26px] font-body-xsmall-regular font-[number:var(--body-xsmall-regular-font-weight)] text-[#707084] text-[length:var(--body-xsmall-regular-font-size)] tracking-[var(--body-xsmall-regular-letter-spacing)] leading-[var(--body-xsmall-regular-line-height)] [font-style:var(--body-xsmall-regular-font-style)]",
    },
  ];

  return (
    <section className="justify-center gap-[88px] max-[767px]:gap-[30px] px-40 max-[1300px]:px-[50px] max-[767px]:px-[25px] py-[100px] max-[1000px]:py-[40px] bg-white overflow-hidden flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
      <div className="inline-flex h-[964px] items-start gap-56 absolute top-0 left-40 -rotate-180">
        {backgroundLines.map((line, index) => (
          <img
            key={`line-${index}`}
            className={line.className}
            alt="Line"
            src={line.src}
          />
        ))}
      </div>

      <header className="flex-col items-center gap-6 inline-flex relative flex-[0_0_auto]">
        <div className="items-center gap-4 inline-flex flex-col relative flex-[0_0_auto]">
          <div className="w-fit text-[#5235e8] text-[14px] max-[1000px]:text-[13px] max-[767px]:text-[12px] tracking-[0.56px] leading-[19.6px] whitespace-nowrap relative font-['Aeonik'] font-medium">
            FEATURES
          </div>

          <h2 className="relative w-[518px] max-[767px]:w-[100%] font-['Aeonik'] font medium text-[40px] max-[1000px]:text-[36px] max-[767px]:text-[28px] leading-[140%] tracking-[-1%] text-center text-[#0e0637]">
            Supercharge your trades with advanced features
          </h2>
        </div>
      </header>

      <div className="flex items-start max-[767px]:flex-col gap-8 relative flex-[0_0_auto]">
        <Card className=" w-full max-w-[544px] max-[767px]:max-w-[100%] inline-flex flex-col items-start  bg-white rounded-3xl border-2 border-solid border-[#eeecfc] shadow-[0px_12px_80px_#5235e81a] relative overflow-hidden">
          <CardContent className="p-0">
            <div className="w-full  h-[250px] max-[1000px]:h-[180px] relative overflow-hidden">
                    <img src="/supercharge-illustration-1.png" className="w-full h-full rounded-3xl" alt="" />
              </div>

            <div className="flex-col items-start gap-4 pt-8 pb-12 px-12 inline-flex relative max-[1000px]:px-5 max-[767px]:pb-[30px]">
              <h3 className="relative w-fit font-['Aeonik'] font-medium text-[24px] max-[1100px]:text-[20px] leading-[150%] tracking-[-1%]  text-[#0e0637]  whitespace-nowrap">
                Grow and earn everyday
              </h3>

              <p className="relative w-full max-w-[448px] max-[767px]:max-w-[100%] font-['Aeonik'] font-regular text-[16px]  leading-[160%] tracking-[0.5%] text-[#42424d]">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="w-full max-w-[544px] max-[767px]:max-w-[100%] inline-flex flex-col items-start  bg-white rounded-3xl border-2 border-solid border-[#eeecfc] shadow-[0px_12px_80px_#5235e81a] relative overflow-hidden">
          <CardContent className="p-0">
            <div className="w-full h-[250px] max-[1000px]:h-[150px] max-[767px]:h-[180px] relative overflow-hidden">
                  <img src="/supercharge-illustration-2.png" className="w-full h-full rounded-3xl" alt="" />
            </div>

            <div className="flex-col items-start gap-4 pt-8 pb-12 px-12 inline-flex relative max-[1000px]:px-5 max-[767px]:pb-[30px]">
              <h3 className="relative w-fit font-['Aeonik'] font-medium text-[24px] max-[1100px]:text-[20px] leading-[150%] tracking-[-1%]  text-[#0e0637]  ">
                Virtual cards powered by Mastercard
              </h3>

              <p className="relative w-full max-w-[448px] max-[767px]:max-w-[100%] font-['Aeonik'] font-regular text-[16px] leading-[160%] tracking-[0.5%] text-[#42424d] ">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
