"use client"
import { ChevronDownIcon, Menu as MenuIcon, X as XIcon } from "lucide-react";
import React , {useState} from "react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";


const cryptoCards = [
  {
    logo: "/logo--bitcoin-1.svg",
    symbol: "BTC",
    name: "Bitcoin",
    price: "$1,236.21",
    position: "top-12 left-10",
    width: "w-[374px]",
  },
  {
    logo: "/logo-eth.svg",
    symbol: "ETH",
    name: "Ethereum",
    price: "$2,236.21",
    position: "top-32 left-4",
    width: "w-[522px]",
    hasChart: true,
    chartImage: "/group-7.png",
  },
  {
    logo: "/logo-ogn.svg",
    symbol: "OGN",
    name: "Origin Protocol",
    price: "$165,8",
    position: "top-52 left-[184px]",
    width: "w-[413px]",
  },
  {
    logo: "/logo-act.svg",
    symbol: "ACN",
    name: "Achain",
    price: "$165,8",
    position: "top-72 left-48",
    width: "w-[374px]",
  },
  {
    logo: "/logo-usdt.svg",
    symbol: "USDT",
    name: "Tether",
    price: "$165,8",
    position: "top-[368px] left-4",
    width: "w-[496px]",
    hasChart: true,
    chartImage: "/group-6-1.png",
  },
];

const overlayCards = [
  {
    logo: "/logo-eth.svg",
    symbol: "ETH",
    name: "Ethereum",
    price: "$2,236.21",
    position: "top-32 left-4",
    width: "w-[518px]",
    hasChart: true,
    chartImage: "/group-7-1.png",
  },
  {
    logo: "/logo-act.svg",
    symbol: "ACN",
    name: "Achain",
    price: "$165,8",
    position: "top-72 left-[136px]",
    width: "w-[368px]",
  },
];

const statisticsData = [
  {
    value: "1 millions",
    description: "Volume traded",
  },
  {
    value: "50+",
    description: "Countries supported",
    hasBadge: true,
    badgeText: "counting...",
  },
  {
    value: "1 platform",
    description: "For crypto wallet & trading",
  },
];

export default function HeroSection  ({ onSignInClick }: { onSignInClick: () => void }) {
             
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [features, setFeatures] = useState("Features");
  const [company, setCompany] = useState("Company");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigationItems = [
    { label: "Features", hasDropdown: true },
    { label: "Prices", id:'wallet', hasDropdown: false },
    { label: "Company", hasDropdown: true },
    { label: "Developers", id:'careers', hasDropdown: false },
  ];

  const dropdownData = {
    Features: [
      { label:"Portfolio", id:'portfolio'},
      { label:"Wallet", id:'wallet'},
      {label :"Card", id:'cards'},
      { label:"Trading", id:'trading'},
    ],
    Company: [
      { label: "Careers", id: "careers" },
      { label: "Affiliates", id: "affiliates" }, // Add a section or link
      { label: "Press", id: "press" },
      { label: "Investors", id: "trading" },
    ],
  };

  const CustomDropdown = ({
    options,
    selected,
    setSelected,
  }: {
    options: { label: string; id: string }[];
    selected: string;
    setSelected: (value: string) => void;
  }) => {
    const [open, setOpen] = useState(false);

    const handleSelect = (option: { label: string; id: string }) => {
      setSelected(option.label);
      setOpen(false);
      if (option.id) {
        const element = document.getElementById(option.id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    return (
      <div className="relative w-full max-w-[120px] z-51 bg-white">
        <div
          onClick={() => setOpen(!open)}
          className="z-10  font-['Aeonik'] font-regular text-[14px] leading-[145%] tracking-[0]  text-[#0e0637]  border-none rounded-[10px] py-1 cursor-pointer flex justify-between items-center gap-[6px]"
        >
          <span>{selected}</span>
          <ChevronDownIcon className="w-4 h-4" />
        </div>
        {open && (
          <ul className="absolute top-full max-[1000px]:left-[120px] max-[1000px]:top-[10px] w-full bg-white border border-gray-200 rounded-[6px] shadow-md z-51 ">
            {options.map((option) => (
              <li
                key={option.label}
                onClick={() => handleSelect(option)}
                className="px-2 py-2 bg-white  text-[#0e0637] cursor-pointer hover:bg-gray-100 font-['Aeonik'] font-regular text-[12px] leading-[145%] tracking-[0]  text-[#0e0637] rounded-[6px]"
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };








            
  return (
    <section className="flex flex-col items-center relative w-full overflow-hidden shadow-[0px_4px_200px_#e8f9f733] bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(247,246,254,1)_92%)]">
       <header className="fixed z-50 flex flex-col items-start gap-2 px-12 max-[767px]:px-[25px] py-6 w-full bg-[#ffffff66] backdrop-blur-2xl backdrop-brightness-[100%]">
       <nav className="relative w-full flex items-center justify-between max-w-[1344px] mx-auto">
  <img className="w-40 h-8 max-[500px]:w-30" alt="Logo" src="/coinbank-logo.png" />

  {/* Desktop Navigation */}
  <div className="hidden min-[1021px]:flex items-center gap-10">
    {navigationItems.map((item, index) => (
      <div key={index} className="flex items-center gap-2 ">
        {item.hasDropdown ? (
          item.label === "Features" ? (
            <CustomDropdown
              options={dropdownData.Features}
              selected={features}
              setSelected={setFeatures}
            />
          ) : item.label === "Company" ? (
            <CustomDropdown
              options={dropdownData.Company}
              selected={company}
              setSelected={setCompany}
            />
          ) : null
        ) : (
          <div
            className="cursor-pointer font-['Aeonik'] font-regular text-[14px] leading-[145%] tracking-[0]  text-[#0e0637]"
            onClick={() => {
              if (item.id) {
                const section = document.getElementById(item.id);
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }
            }}
          >
            {item.label}
          </div>
        )}
      </div>
    ))}
  </div>

  {/* Desktop Buttons */}
  <div className="hidden min-[1021px]:flex items-center gap-4">
    <Button
      variant="outline"
      onClick={onSignInClick}
      className="z-11 cursor-pointer transform transition-transform duration-300 hover:scale-90   h-auto px-6 py-[11px] rounded-lg border-[#d6d1f9] bg-white"
    >
      <span className="font-['Aeonik'] font-regular text-[16px] max-[767px]:text-[14px] leading-[160%] tracking-[0.5%]  text-[#0e0637]">Sign In</span>
    </Button>
    <Button className="z-11 cursor-pointer transform transition-transform duration-300 hover:scale-90   h-auto px-6 py-[11px] bg-white text-[#5235e8] rounded-lg border border-[#d6d1f9] hover:bg-gray-50">
      <span className="font-['Aeonik'] font-regular text-[16px] max-[767px]:text-[14px] leading-[160%] tracking-[0]  text-[#0e0637] text-[#5235e8] bg-white">Get Started</span>
    </Button>
  </div>

  {/* Mobile Menu Button */}
  <button
    className="min-[1021px]:hidden p-2"
    onClick={() => setIsMenuOpen(!isMenuOpen)}
  >
    {isMenuOpen ? <XIcon className="w-6 h-6 text-[#5253e8]" /> : <MenuIcon className="w-6 h-6 text-[#5253e8]" />}
  </button>
</nav>
            


            {/* mobile open */}

            {isMenuOpen && (
  <div className="flex flex-col  gap-4 mt-4 p-4 bg-white rounded-lg shadow-lg min-[1021px]:hidden">
    {navigationItems.map((item, index) => (
      <div key={index}>
        {item.hasDropdown ? (
          item.label === "Features" ? (
            <CustomDropdown
              options={dropdownData.Features}
              selected={features}
              setSelected={setFeatures}
            />
          ) : item.label === "Company" ? (
            <CustomDropdown
              options={dropdownData.Company}
              selected={company}
              setSelected={setCompany}
            />
          ) : null
        ) : (
          <div
            className="cursor-pointer font-['Aeonik'] font-regular text-[14px] leading-[145%] tracking-[0]  text-[#0e0637] py-2"
            onClick={() => {
              setIsMenuOpen(false); // close menu after click
              if (item.id) {
                const section = document.getElementById(item.id);
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }
            }}
          >
            {item.label}
          </div>
        )}
      </div>
    ))}

    <div className="flex flex-col gap-2 mt-4">
      <Button variant="outline" onClick={onSignInClick} className="w-full z-11 cursor-pointer transform transition-transform duration-300 hover:scale-90  ">Sign In</Button>
      <Button className="w-full bg-[#5235e8] text-white z-11 cursor-pointer transform transition-transform duration-300 hover:scale-90  ">Get Started</Button>
    </div>
  </div>
)}

      </header>

      <main className="flex items-start justify-between max-[1000px]:flex-col gap-10 max-[1300px]:gap-[50px] max-[1000px]:gap-10  pt-[150px] pb-20 max-[1000px]:pt-[120px] max-[1000px]:pb-10 px-40 max-[1300px]:px-[50px] max-[1100px]:px-[50px] max-[767px]:px-[25px] relative w-full  ">
      <div className="absolute top-0 left-0 w-full  h-full flex justify-between ">
  {Array.from({ length: 6 }).map((_, i) => (
    <div
      key={i}
      className="w-px h-full z-0 bg-[linear-gradient(90deg,rgba(231,227,252,0)_0%,#E7E3FC_0%,#ffff_100%)]"
    />
  ))}
</div>

        <div className="flex flex-col items-start max-[1000px]:items-center gap-12 max-[1000px]:gap-6 z-10 max-[1100px]:w-[450px] max-[1000px]:w-[500px] max-[1000px]:mx-auto max-[767px]:w-[100%] max-[767px]:mx-0 ">
          <div className="flex flex-col items-start max-[1000px]:items-center  gap-6 max-[1000px]:gap-4">
            <div className="font-['Aeonik'] font-medium text-[#5235e8] max-[1000px]:text-center text-[14px] max-[1000px]:text-[13px] max-[767px]:text-[12px] tracking-[4%] leading-[160%] whitespace-nowrap">
              SIGN IN TO YOUR SECURE WALLET!
            </div>

            <div className="flex flex-col items-start gap-8 max-[1000px]:gap-5">
              <h1 className="w-full max-w-[488px] max-[1000px]:max-w-[100%] max-[1000px]:text-center font-['Aeonik'] font-medium text-[64px] max-[1100px]:text-[52px] max-[1000px]:text-[36px] max-[767px]:text-[28px] tracking-[-1%] leading-[110.001%] text-[#0e0637]">
                The next-gen crypto wallet &amp; trading platform
              </h1>

              <p className="w-full max-w-[390px] max-[1000px]:max-w-[100%] max-[1000px]:text-center font-['Aeonik'] font-regular text-[#717184] text-[18px] max-[1100px]:text-[16px] max-[767px]:text-[14px] tracking-[0] leading-[155%] ">
                All of your cryptocurrency in one place — from Bitcoin and
                Ethereum to Litecoin and Ripple.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 w-full max-[340px]:flex-col ">
            <div className="flex flex-col gap-[7px] flex-1">
              <div className="px-6 py-3 w-full h-12 bg-white rounded-lg shadow-drop-shadow-2 flex items-start max-[767px]:border max-[767px]:border-black/6">
                <Input
                  placeholder="Your email address"
                  className="border-0 p-0 h-full bg-transparent  outline-none font-['Aeonik'] font-regular  text-[14px] tracking-[0%] leading-[145%] placeholder:text-[#9c9cab]  text-[#9c9cac] focus-visible:ring-0 focus-visible:ring-offset-0 focus:shadow-none shadow-none"
                />
              </div>
            </div>

            <Button className="z-11 cursor-pointer transform transition-transform duration-300 hover:scale-90   w-[133px] max-[500px]:w-[90px] max-[500px]:h-12  h-auto px-6 py-[11px] bg-[#5235e8] rounded-lg hover:bg-[#4429d1]">
              <span className=" font-['Aeonik'] font-medium text-[#5235e8] text-[16px] max-[767px]:text-[14px] tracking-[0.5%] leading-[160%]  text-white">
                Get Started
              </span>
            </Button>
          </div>
        </div>

        <div className="relative w-[544px] h-[480px] max-[1100px]:w-[400px] max-[1000px]:w-[100%] max-[1000px]:h-auto">
           <img src="/Illustration.png" className="w-full h-full  object-cover max-[1100px]:object-contain max-[1000px]:object-cover" alt="" />
        </div>
      </main>

      <footer className="flex flex-col  justify-between  gap-2 px-40 max-[1100px]:px-[50px] max-[767px]:px-[25px] py-12 bg-white w-full">
        <div className="flex items-center justify-between gap-8 max-[1100px]:gap-16 max-[767px]:gap-8 max-[518px]:flex-col">
          {statisticsData.map((stat, index) => (
            <div key={index} className="flex flex-col items-center  gap-2">
              {stat.hasBadge ? (
                <div className="flex w-full  max-w-[352px] max-[800px]:max-w-[150px] items-center justify-center gap-2">
                  <div className="font-['Aeonik'] font-medium text-[40px] max-[1100px]:text-[36px] max-[1000px]:text-[28px] max-[767px]:text-[24px] leading-[140%] tracking-[-1%] text-[#0e0637] text-center">
                    {stat.value}
                  </div>

                  <Badge className="px-3 py-1 bg-[#daf626] text-[#0e0637] rounded-3xl hover:bg-[#daf626]">
                    <span className="font-['Aeonik'] font-medium text-[12px] leading-[135%] tracking-[0.5%] text-[#0e0637] text-center">
                      {stat.badgeText}
                    </span>
                  </Badge>
                </div>
              ) : (
                <div className="w-[352px] max-[800px]:max-w-[150px] font-['Aeonik'] font-medium text-[40px] max-[1100px]:text-[36px] max-[1000px]:text-[28px] max-[767px]:text-[24px]  leading-[140%] tracking-[-1%] text-[#0e0637] text-center">
                  {stat.value}
                </div>
              )}

              <div className="font-['Aeonik'] font-regular text-[14px] max-[1000px]:text-[12px] leading-[145%] tracking-[0] text-[#717184] text-center">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </footer>
    </section>
  );
};
