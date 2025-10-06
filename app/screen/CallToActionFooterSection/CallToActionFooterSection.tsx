'use client'
import { ChevronDownIcon } from "lucide-react";
import React , {useState} from "react";
import { Button } from "../../components/ui/button";
import Link from "next/link";

const monthLabels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const companyLinks = [
  { name: "About", id: "portfolio" },
  { name: "Careers", id: "careers" },
  { name: "Affiliates", id: "affiliates" }, // Add a section or link
  { name: "Press", id: "press" },
  { name: "Investors", id: "trading" },
  { name: "Legal & Privacy", id: "legal" },
];


const featureLinks = [
  {name : "Buy & Sell Crypto", id:'crypto'},
  { name:"Wallet", id:'wallet'},
  {name :"Card", id:'cards'},
  {name :"Dashboard", id:'dashboard'},
  { name:"Trading", id:'trading'},
  { name:"Portfolio", id:'portfolio'},
];

const developerLinks = [
  "Cloud",
  "Wallet SDK",
  "Query & Transact",
  "Commerce",
  "Exchange & Pro",
  "API Access",
];

const resourceLinks = ["Blog", "Help & Support", "Customer Stories", "FAQ"];

export default function CallToActionFooterSection  ()  {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const languages = ["English", "Spanish", "French", "German", "Chinese"];

  return (
    <section className="flex flex-col items-center justify-center gap-16 px-40 max-[1390px]:px-[50px] max-[767px]:px-[25px] max-[1000px]:py-[40px] py-[100px] w-full  bg-[#f7f5fd] shadow-[0px_4px_200px_#e8f9f733]">
      <div className="flex h-[400px]  max-[1100px]:h-[620px] max-[767px]:h-[500px] max-[500px]:h-[470px] items-start  max-[1100px]:flex-col max-[1100px]:items-center pt-[88px] pb-28 px-16 max-[1100px]:px-10 max-[767px]:pt-[30px] max-[767px]:px-[20px] w-full bg-[#5235e8] rounded-3xl max-[767px]:rounded-2xl overflow-hidden relative">
        <div className="w-[1472px] h-[2035px] top-[-738px] absolute left-0 max-[1100px]:hidden">
          <div className="absolute w-[1004px] h-[720px] top-[738px] right-[0px] max-[1700px]:right-[250px] max-[1500px]:left-[116px]">
            <img
              className="absolute w-[1004px] h-[400px] top-0 left-0"
              alt="Polygon"
              src="/polygon-2.png"
            />
            <img
              className="absolute w-[700px] h-[800px] max-[1500px]:w-[558px] max-[1500px]:h-[657px] top-[63px] left-[21px]   max-[1100px]:top-[210px]"
              alt="Polygon"
              src="/polygon-1-1.png"
            />
          </div>
          <img
            className="absolute w-[218px] h-[717px] top-[-3334px] left-[-1949px] max-[1100px]:top-[-3010px]"
            alt="Polygon"
            src="/polygon-3.png"
          />
        </div>

        <div className="flex flex-col items-start max-[1100px]:items-center  gap-10 relative flex-[0_0_auto]">
          <h2 className="w-[460px] max-[1500px]:w-[366px] max-[1100px]:w-[100%] max-[1100px]:text-center font-['Aeonik'] font-medium text-[48px] max-[1500px]:text-[40px] max-[1000px]:text-[36px] max-[767px]:text-[28px] max-[767px]:leading-[130%] leading-[140%] tracking-[-1%]">
            <span className="text-white">Sign in now </span>
            <span className="text-[#d6d1fa]">to get $50 worth of crypto</span>
          </h2>

          <Button className="z-11 cursor-pointer transform transition-transform duration-300 hover:scale-90   w-[133px]  h-[48px] inline-flex items-center justify-center gap-4 px-6 py-[11px] bg-white rounded-lg border border-solid border-[#d6d1f9] hover:bg-gray-50">
            <span className=" text-[#5235e8] font-['Aeonik'] font-medium text-lg max-[1500px]:text-[16px] leading-[160%] tracking-[0.5%]">
              Get Started
            </span>
          </Button>
        </div>

        <div className="h-[336px] items-start gap-20 max-[500px]:gap-4 top-16 right-[64px]  inline-flex absolute max-[1100px]:left-1/5 max-[1100px]:-x-translate-1/5 max-[860px]:left-1/8 max-[860px]:-x-translate-1/8 max-[1100px]:top-[300px] max-[767px]:top-[200px]  max-[500px]:top-[200px] max-[400px]:left-[20px] max-[380px]:left-[20px] max-[365px]:left-[10px] max-[350px]:left-auto">

             <img src="/phone.png" className="w-full h-full object-contain max-[767px]:w-[200px] max-[767px]:h-[400px] max-[500px]:w-[150px] max-[500px]:h-[385px] max-[350px]:hidden" alt="" />


          <div className="inline-flex flex-col items-center gap-4 relative flex-[0_0_auto] max-[767px]:mt-[80px] max-[500px]:mt-[50px] max-[350px]:mr-[10px]">
            <img
              className="w-[140px] h-[140px] max-[767px]:w-[100px] max-[767px]:h-[100px]"
              alt="Qr code"
              src="/qr-code.png"
            />
            <img
              className="w-[14.73px] h-[33px]"
              alt="Vector"
              src="/vector.png"
            />
            <p className="w-[140px] font-['Aeonik'] text-white text-center font-medium text-[14px] leading-[145%] tracking-[0%]">
              Scan to download Coinbank wallet
            </p>
          </div>
        </div>
      </div>

      <footer className="flex items-start justify-between  gap-24 max-[1000px]:gap-10 max-[1160px]:gap-15 max-[1020px]:flex-wrap max-[365px]:items-center pl-16 max-[767px]:pl-5 pr-8 max-[767px]:pr-5 pt-16 max-[767px]:pt-10 max-[767px]:pb-[30px] pb-[58px] w-full bg-white rounded-3xl max-[767px]:rounded-2xl overflow-hidden ">
        <div className="inline-flex flex-col items-start gap-12 max-[500px]:gap-5 relative flex-[0_0_auto] ">
          <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
            <img
              className="w-[60px] max-[1500px]:w-[42px] flex-[0_0_auto]"
              alt="Logo"
              src="/logo.png"
            />

            <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
            <div className="relative w-56 max-[1500px]:w-48">
      {/* Input with clickable image */}
      <div className="flex items-center justify-between pt-[7px] pb-2 px-3 bg-white rounded-lg border border-solid border-[#e3e3e7] cursor-pointer"
           onClick={() => setIsOpen(!isOpen)}>
        <input
          type="text"
          value={selectedLanguage}
          readOnly
          className="font-['Aeonik'] font-medium text-[14px] max-[1500px]:text-[12px] leading-[135%] tracking-[0.5%] text-[#0e0637] outline-none bg-transparent w-full cursor-pointer z-10"
        />
        <img className="w-4 h-4 ml-2" alt="Dropdown Icon" src="/icon-17.png.png" />
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute top-full mt-1 w-full bg-white border border-[#e3e3e7] rounded-lg shadow-lg z-20">
          {languages.map((lang) => (
            <div
              key={lang}
              className="px-3 py-2 text-sm max-[1500px]:text-[12px] text-[#0e0637] hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setSelectedLanguage(lang);
                setIsOpen(false);
              }}
            >
              {lang}
            </div>
          ))}
        </div>
      )}
    </div>

              <div className="flex items-center justify-between gap-4 w-[164px]">
                 <Link href='https://www.instagram.com/'><img  className="w-8 h-8 max-[1500px]:w-5 max-[1500px]:h-5 z-11 cursor-pointer transform transition-transform duration-300 hover:scale-90  " alt="Socials"  src="/instagram.png" /></Link>
                 <Link href='https://www.facebook.com/'><img  className="w-8 h-8 max-[1500px]:w-5 max-[1500px]:h-5 z-11 cursor-pointer transform transition-transform duration-300 hover:scale-90  " alt="Socials"  src="/facebook.png" /></Link>
                 <Link href='https://twitter.com/'><img  className="w-8 h-8 max-[1500px]:w-5 max-[1500px]:h-5 z-11 cursor-pointer transform transition-transform duration-300 hover:scale-90  " alt="Socials"  src="/twitter.png" /></Link>
                 <Link href='https://www.linkedin.com/'><img  className="w-8 h-8 max-[1500px]:w-5 max-[1500px]:h-5 z-11 cursor-pointer transform transition-transform duration-300 hover:scale-90  " alt="Socials"  src="/linkedin.png" /></Link>
                <Link href='https://discord.com/'> <img  className="w-8 h-8 max-[1500px]:w-5 max-[1500px]:h-5 z-11 cursor-pointer transform transition-transform duration-300 hover:scale-90  " alt="Socials"  src="/discord.png" /></Link>
              </div>
            </div>
          </div>

          <div className="font-['Aeonik'] font-regular text-[16px] max-[1500px]:text-[14px] leading-[145%] tracking-[0.5%] text-[#9c9cab] whitespace-nowrap">
            Copyright 2022 © Coinbank
          </div>
        </div>

        <div className="inline-flex items-start max-[767px]:flex-wrap gap-8 relative ">
          <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
            <h3 className="w-40 max-[1160px]:w-[120px] max-[767px]:w-[160px] max-[500px]:w-[120px]  text-[#131316]  font-['Aeonik'] font-medium text-[17px] max-[1500px]:text-[16px] leading-[160%] tracking-[0.5%]">
              Company
            </h3>
            <nav className="inline-flex flex-col items-start gap-2 relative flex-[0_0_auto]">
            {companyLinks.map((link, linkIndex) => (
                        <a
                        key={linkIndex}
                        href={link.id ? `#${link.id}` : "#"}
                        onClick={!link.id ? (e) => e.preventDefault() : undefined}
                          className="w-40 max-[1160px]:w-[120px] max-[767px]:w-[160px] max-[500px]:w-[120px] font-['Aeonik'] font-regular text-[16px] max-[1500px]:text-[14px] leading-[145%] tracking-[0%] text-[#717184] hover:text-[#5235e8] transition-colors"
                        >
                          {link.name}
                        </a>
                      ))}
            </nav>
          </div>

          <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
            <h3 className="w-40 max-[1160px]:w-[120px] max-[767px]:w-[160px] max-[500px]:w-[120px] text-[#131316] text-[#5235e8] font-['Aeonik'] font-medium text-[17px] max-[1500px]:text-[16px] leading-[160%] tracking-[0.5%]">
              Features
            </h3>
            <nav className="inline-flex flex-col items-start gap-2 relative flex-[0_0_auto]">
            {featureLinks.map((link, linkIndex) => (
                        <a
                          key={`${featureLinks}-link-${linkIndex}`}
                          href={link.id ? `#${link.id}` : "#"}
                          className="w-40 max-[1160px]:w-[120px] max-[767px]:w-[160px] max-[500px]:w-[120px] font-['Aeonik'] font-regular text-[16px] max-[1500px]:text-[14px] leading-[145%] tracking-[0%] text-[#717184] hover:text-[#5235e8] transition-colors"
                        >
                          {link.name}
                        </a>
                      ))}
            </nav>
          </div>

          <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
            <h3 className="w-40 max-[1160px]:w-[120px] max-[767px]:w-[160px] max-[500px]:w-[120px] font-['Aeonik'] font-medium text-[17px] max-[1500px]:text-[16px] leading-[160%] tracking-[0.5%] text-[#131216]">
              Developers
            </h3>
            <nav className="inline-flex flex-col items-start gap-2 relative flex-[0_0_auto]">
              {developerLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-40 max-[1160px]:w-[120px] max-[767px]:w-[160px] max-[500px]:w-[120px] font-['Aeonik'] font-regular text-[16px] max-[1500px]:text-[14px] leading-[145%] tracking-[0%] text-[#717184] hover:text-[#5235e8] transition-colors"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
            <h3 className="w-40 max-[1160px]:w-[120px] max-[767px]:w-[160px] max-[500px]:w-[120px] font-['Aeonik'] font-medium text-[17px] max-[1500px]:text-[16px] leading-[160%] tracking-[0.5%] text-[#131216]">
              Resources
            </h3>
            <nav className="inline-flex flex-col items-start gap-2 relative flex-[0_0_auto]">
              {resourceLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className={`${index === 1 ? "w-fit" : "w-40 max-[1160px]:w-[120px] max-[500px]:w-[120px] max-[767px]:w-[160px]"} font-['Aeonik'] font-regular text-[16px] max-[1500px]:text-[14px] leading-[145%] tracking-[0%]  ${index === 1 ? "whitespace-nowrap" : ""} text-[#717184] hover:text-[#5235e8] transition-colors`}
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </footer>
    </section>
  );
};
