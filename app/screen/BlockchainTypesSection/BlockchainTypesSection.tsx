import { ChevronDownIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../components/ui/card";

export default function BlockchainTypesSection  () {
  const backgroundLines = [
    { src: "/line-99-1.png" },
    { src: "/line-99-1.png" },
    { src: "/line-99-1.png" },
    { src: "/line-99-1.png" },
    { src: "/line-99-1.png" },
    { src: "/line-103-1.png" },
  ];

  const chartIndicators = [
    { className: "w-10 h-1.5 bg-[#e3e3e7] rounded-sm" },
    { className: "w-10 h-1.5 bg-[#e3e3e7] rounded-sm" },
    { className: "w-10 h-1.5 bg-[#e3e3e7] rounded-sm" },
    { className: "w-10 h-1.5 bg-[#e3e3e7] rounded-sm" },
    { className: "w-10 h-1.5 bg-[#e3e3e7] rounded-sm" },
    { className: "w-10 h-1.5 bg-[#e3e3e7] rounded-sm" },
  ];

  const months = [
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

  const watchlistItems = [
    {
      logo: "/USDT.png",
      name: "Tether",
      symbol: "USDT",
      price: "$165,8",
      barWidth: "w-[66px]",
      percentage: "1.37%",
    },
    {
      logo: "/crypto-4.png",
      name: "Bitcoin",
      symbol: "BTC",
      price: "$1,236.21",
      barWidth: "w-[74px]",
      percentage: "1.37%",
    },
    {
      logo: "/crypto-1.png",
      name: "Achain",
      symbol: "ACN",
      price: "$165,8",
      barWidth: "w-[50px]",
      percentage: "1.37%",
    },
  ];

  return (
    <section className="justify-center gap-[88px] max-[767px]:gap-[30px] px-40 max-[1300px]:px-[50px] max-[767px]:px-[25px] py-[100px] max-[1000px]:py-10 overflow-hidden bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(247,246,254,1)_92%)] flex flex-col items-center relative w-full">

    <header className="flex-col items-start gap-4 max-[767px]:gap-2 inline-flex relative w-[1300px] max-[1500px]:w-[100%]">
      <div className="w-fit text-[#5235e8] text-base max-[1500px]:text-[14px] max-[1000px]:text-[13px] max-[767px]:text-[12px] max-[767px]:leading-[140%] tracking-[0.56px] leading-[19.6px] whitespace-nowrap relative font-['Aeonik'] font-medium">
        FEATURES
      </div>
  
      <h2 className="relative w-[402px] max-[767px]:w-[100%] font-['Aeonik'] text-[#0e0637] font-medium text-[48px] max-[1500px]:text-[40px] max-[1000px]:text-[36px] max-[767px]:text-[28px] max-[767px]:leading-[120%] leading-[140%] tracking-[-1]">
        Seamless Trading
      </h2>
  
      <div className="inline-flex max-[1100px]:flex-col  max-[1100px]:gap-6 items-start justify-between gap-50 max-[1500px]:gap-16 relative">
        <p className="w-[640px] max-[1100px]:w-full font-['Aeonik'] text-[17px] max-[1500px]:text-[16px] max-[767px]:text-[14px] max-[767px]:leading-[150%] leading-[160%] text-[#717184]">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor.
        </p>
  
        <p className="w-[416px] max-[1100px]:w-full font-['Aeonik'] text-[17px] max-[1500px]:text-[16px] max-[767px]:text-[14px] max-[767px]:leading-[150%] leading-[160%] text-[#717184]">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
        </p>
      </div>
    </header>
  
    <div className="gap-16 max-[767px]:gap-[30px] inline-flex max-[1100px]:flex-col items-start justify-between pr-[30px] max-[1500px]:pr-0 relative w-full max-w-[1300px]">
      {/* Left Card */}
      <Card className="relative w-[640px] max-[1100px]:w-full max-[519px]:hidden h-[402px] bg-white rounded-3xl border-2 border-solid border-[#eeecfc] shadow-[20px_20px_80px_#5235e81a]">
      <CardContent className="p-0 relative w-full h-full">
        <div className="inline-flex items-center gap-4 absolute top-[38px] left-[38px]">
          <div className="relative w-fit mt-[-1.00px] text-[length:var(--body-medium-medium-font-size)] tracking-[var(--body-medium-medium-letter-spacing)] leading-[var(--body-medium-medium-line-height)] font-body-medium-medium font-[number:var(--body-medium-medium-font-weight)] text-[#131216] whitespace-nowrap [font-style:var(--body-medium-medium-font-style)]">
            USD/BTC
          </div>

          <img
            className="relative w-4 h-4"
            alt="Group"
            src="/group-96.png"
          />
        </div>

        <div className="absolute w-[506px] max-[1100px]:w-[90%] max-[560px]:w-[85%] h-[236px] top-[106px] left-10 bg-[url(/group-6.png)] bg-[100%_100%]">
          <img
            className="absolute w-[488px] max-[1100px]:w-[90%] max-[560px]:w-[85%] h-44 top-0 left-0"
            alt="Group"
            src="/group-156.png"
          />
        </div>

        <div className="inline-flex flex-col items-start gap-9 absolute top-[104px] right-[32px]">
          {chartIndicators.map((indicator, index) => (
            <div key={`indicator-${index}`} className={indicator.className} />
          ))}
        </div>

        <div className="gap-6 top-[351px] left-[38px] inline-flex items-start max-[1100px]:gap-12 max-[1000px]:gap-9 max-[850px]:gap-7 max-[767px]:gap-3   absolute">
          {months.map((month, index) => (
            <div
              key={`month-${index}`}
              className="relative  max-[1100px]:w-[100%] font-['Aeonik'] text-[#0e0637] font-medium text-[12px]  leading-[135%] tracking-[0.5%] text-[#9c9cab]"
            >
              {month}
            </div>
          ))}
        </div>
      </CardContent>




      </Card>

      <img src="/chart-1.png" className="hidden max-[518px]:block w-full h-full" alt="" />
  
      {/* Right Cards */}
        <div className="flex-col gap-10 inline-flex items-start relative max-[1100px]:w-full max-[1100px]:items-center max-[1102px]:hidden ">
          <Card className="relative w-[416px] max-[1100px]:w-full h-[72px] bg-[#0e0637] rounded-2xl">
          <CardContent className="p-0 relative w-full h-full">
                <div className="relative w-[352px] max-[1100px]:w-full h-10 top-4 left-8">
                  <button className="z-11 cursor-pointer transform transition-transform duration-300 hover:scale-90   inline-flex items-center justify-center gap-2 px-3 py-2 absolute top-1 right-[0px] max-[1100px]:right-[62px] max-[400px]:right-[45px] bg-white rounded-lg border border-solid border-[#e3e3e7]">
                    <span className="w-[45px] h-4 relative  font-['Aeonik'] font-regular text-[12px] leading-[135%]  tracking-[0.5%] text-[#0e0637]  whitespace-nowrap">
                      Monthly
                    </span>

                    <ChevronDownIcon className="relative w-4 h-4  text-[#000000]" />
                  </button>

                  <div className="absolute w-[177px] h-10 top-0 left-0">
                    <div className="absolute w-[61px] h-10 top-0 left-0">
                      <div className="absolute top-0 left-0 font-['Aeonik'] font-medium text-[14px] leading-[145%] text-white tracking-[0]">
                        $6278.13
                      </div>

                      <div className="absolute w-[53px] h-4 top-6 left-0 font-['Aeonik'] font-regular text-[12px] leading-[135%] text-[#9b9bab] tracking-[0.5%]">
                        Last price
                      </div>
                    </div>

                    <div className="absolute w-[76px] h-10 top-0 left-[105px]">
                      <div className="absolute top-0 left-0 font-['Aeonik'] font-medium text-[14px] leading-[145%] text-white tracking-[0] whitespace-nowrap ">
                        38.25 BTC
                      </div>

                      <div className="absolute w-[72px] h-4 top-6 left-0 text-[#9b9bab] font-['Aeonik'] font-regular text-[12px] leading-[135%]  tracking-[0.5%]">
                        Volume (24h)
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
          </Card>
    
          <Card className="relative w-[416px] max-[1100px]:w-full h-[290px] bg-[#5235e8] rounded-2xl overflow-hidden">
          <CardContent className="p-0 relative w-full h-full">
                <div className="relative w-[712px] h-[845px] left-[-241px]">
                  <div className="absolute w-[712px] h-[845px] top-0 left-0">
                    <img
                      className="absolute w-[712px] h-[776px] top-[69px] left-0"
                      alt="Polygon"
                      src="/polygon-1.png"
                    />

                    <img
                      className="absolute w-[158px] h-[188px] top-0 left-[449px]"
                      alt="Group"
                      src="/group-14358-1.png"
                    />

                    <div className="inline-flex flex-col items-start gap-4 absolute top-[74px] left-[273px]">
                      {watchlistItems.map((item, index) => (
                        <div key={`watchlist-${index}`}>
                          <div className="relative w-full h-10">
                            <div className="inline-flex items-start gap-3 absolute top-0 left-0">
                              <img
                                className="relative w-10 h-10"
                                alt={`Logo ${item.symbol}`}
                                src={item.logo}
                              />

                              <div className="inline-flex flex-col items-start gap-0.5 relative">
                                <div className="inline-flex items-center gap-2 relative">
                                  <div className="relative w-fit font-['Aeonik'] font-regular text-[14px] leading-[145%]  tracking-[0%] text-white whitespace-nowrap">
                                    {item.name}
                                  </div>
                                </div>

                                <div className="relative w-fit text-[#daf626] font-['Aeonik'] font-regular text-[12px] leading-[135%]  tracking-[0.5%] whitespace-nowrap">
                                  {item.symbol}
                                </div>
                              </div>
                            </div>

                            <div className="inline-flex flex-col items-start gap-[9px] absolute top-0.5 left-[149px]">
                              <div className="inline-flex items-center gap-2 relative">
                                <div className="relative w-fit font-['Aeonik'] font-regular text-[16px] leading-[145%]  tracking-[0] text-white whitespace-nowrap">
                                  {item.price}
                                </div>
                              </div>

                              <div
                                className={`${item.barWidth} h-1.5 bg-[#daf626] rounded-sm relative`}
                              />
                            </div>

                            <div className="w-[60px] top-[7px] inline-flex items-center gap-1 px-1.5 py-1 absolute left-[292px] bg-[#ecfdf7] rounded-[100px] border border-solid border-[#dafbef]">
                              <img
                                className="relative w-3 h-3"
                                alt="Icon"
                                src="/icon-10.png"
                              />

                              <div className="relative text-[#11cf8b] w-8 h-4 font-['Aeonik'] font-regular text-[12px] leading-[135%]  tracking-[0.5%] whitespace-nowrap">
                                {item.percentage}
                              </div>
                            </div>
                          </div>

                          {index < watchlistItems.length - 1 && (
                            <img
                              className="w-[236px] h-px relative object-cover mt-4"
                              alt="Line"
                              src="/line-59.png"
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="absolute top-[31px] left-[273px] font-['Aeonik'] font-regular text-[16px] leading-[160%]  tracking-[0.5%] text-white whitespace-nowrap ">
                    My Watchlist
                  </div>
                </div>
              </CardContent>
          </Card>
          
        </div>


         {/* Right part 2 */}
         
         <div className="flex-col  inline-flex items-start relative max-[1100px]:w-full max-[1100px]:items-center min-[1100px]:hidden">
  {/* Top Card */}
  <Card className="relative w-[416px] max-[1100px]:w-[90%] max-[500px]:w-[100%] h-[72px] bg-[#0e0637] rounded-2xl mb-[32px]">
    <CardContent className="p-0 relative w-full h-full">
      <div className="relative w-[352px] max-[1100px]:w-[90%] h-10 top-4 left-8 max-[1100px]:left-4">
        <button className="z-11 cursor-pointer transform transition-transform duration-300 hover:scale-90 inline-flex items-center justify-center gap-2 px-3 py-2 absolute top-1 right-[0px] max-[1100px]:right-[20px] max-[400px]:right-0 bg-white rounded-lg border border-solid border-[#e3e3e7]">
          <span className="text-[12px] text-[#0e0637] whitespace-nowrap">Monthly</span>
          <ChevronDownIcon className="w-4 h-4" />
        </button>

        <div className="absolute w-[177px] max-[1100px]:w-auto h-10 top-0 left-0 flex max-[1100px]:gap-6">
          <div>
            <div className="text-white font-medium text-[14px]">$6278.13</div>
            <div className="text-[#9b9bab] text-[12px]">Last price</div>
          </div>
          <div>
            <div className="text-white font-medium text-[14px]">38.25 BTC</div>
            <div className="text-[#9b9bab] text-[12px]">Volume (24h)</div>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>

  {/* Watchlist Card */}
  <Card className="relative w-[416px] max-[1100px]:w-[90%] max-[500px]:w-[100%] h-[290px] bg-[#5235e8] rounded-2xl overflow-hidden">
  <img
                      className="absolute w-[158px] h-[188px] top-0 right-[0px]"
                      alt="Group"
                      src="/group-14358-1.png"
                    />
    <CardContent className="p-0 relative w-full h-full">
      <div className="relative w-full h-full flex flex-col items-center py-6">
        <div className="text-white text-[16px] mb-4">My Watchlist</div>
        <div className="flex flex-col gap-4 w-[90%]">
          {watchlistItems.map((item, index) => (
            <div key={`watchlist-${index}`} className="flex justify-between items-center w-full">
              <div className="flex items-center gap-3">
                <img className="w-10 h-10" alt={item.symbol} src={item.logo} />
                <div>
                  <div className="text-white text-[14px]">{item.name}</div>
                  <div className="text-[#daf626] text-[12px]">{item.symbol}</div>
                </div>
              </div>

              <div className="flex flex-col items-start gap-1">
                <div className="text-white text-[16px]">{item.price}</div>
                <div className={`${item.barWidth} h-1.5 bg-[#daf626] rounded-sm`} />
              </div>
              

              <div className="flex items-center gap-1 px-2 py-1 bg-[#ecfdf7] rounded-full border border-[#dafbef]">
                <img className="w-3 h-3" alt="Icon" src="/icon-10.png" />
                <span className="text-[#11cf8b] text-[12px]">{item.percentage}</span>
              </div> 
            </div>
              
          ))}
          
        </div>
            
      </div>
    </CardContent>
  </Card>
</div>


    </div>
  </section>
  

  );
};
