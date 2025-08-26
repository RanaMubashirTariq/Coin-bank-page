import React from "react";
import { Card, CardContent } from "../../components/ui/card";

export default function TrustedBySection  () {



  const trustedCompanies = [
    {
      alt: "Group",
      src: "/frame-1.png",
      width: "171px",
      height: "32px",
      left: "1.5px",
    },
    {
      alt: "Logoipsum",
      src: "/frame-2.png",
      width: "174px",
      height: "32px",
      left: "15px",
    },
    {
      alt: "Logoipsum",
      src: "/frame-3.png",
      width: "164px",
      height: "40px",
      left: "7px",
    },
    {
      alt: "Logoipsum",
      src: "/frame-4.png",
      width: "164px",
      height: "36px",
      left: "7px",
    },
  ];





  return (
    <section className="flex flex-col items-center gap-12 pt-[100px] pb-12 px-40 max-[1300px]:px-[50px] max-[1000px]:pt-[40px] max-[1000px]:pb-[40px] relative self-stretch w-full flex-[0_0_auto] bg-white">
      <div className="flex-col items-center gap-4 inline-flex relative flex-[0_0_auto]">
        <div className="relative w-fit  font-['Aeonik'] font-medium text-[#5235e8] text-sm max-[1000px]:text-[13px] max-[767px]:text-[12px] tracking-[0.56px] leading-[140%] whitespace-nowrap">
          PARTNERS
        </div>

        <h2 className="relative  font-['Aeonik'] font-medium text-[#0e0637] text-[40px] max-[1000px]:text-[36px] max-[767px]:text-[28px] tracking-[-1%] leading-[140%]">
          We&apos;re backed by the best
        </h2>

        <p className="relative w-[457px] font-['Aeonik'] text-center font-regular text-[#717184] text-[16px] max-[767px]:text-[14px] tracking-[0.5%] leading-[150%]">
          Trusted by these blockchains leading industries
        </p>
      </div>

              {/* Marquee tag */}


              <div className="relative w-full overflow-hidden">
            <div className="flex gap-6 whitespace-nowrap animate-marquee">
              {[...trustedCompanies, ...trustedCompanies].map((company, index) => (
                <div
                  key={index}
                  className="inline-block bg-white border-none  h-[72px] min-w-[150px] sm:min-w-[180px] md:minw-[200px] lg:min-w-[256px]  max-[550px]:px-0 max-[500px]:py-0"
                >
                  <div className="px-10 py-5 flex justify-center items-center h-full">
                    <img
                      src={company.src}
                      alt={company.alt}
                      className="object-contain h-full w-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
    </section>
  );
};
