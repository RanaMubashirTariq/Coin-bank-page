import { StarIcon } from "lucide-react";
import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { Card, CardContent } from "../../components/ui/card";

const testimonials = [
  {
    quote:
      "Cool crypto currency, fast withdrawals and deposits, way better, than any wallet.",
    name: "Abel Sheldon",
    role: "Entrepreneur",
    avatar: "/image-1.png",
  },
  {
    quote:
      "It's worth it, very intuitive and easy to learn about cryptocurrencies.",
    name: "John Clayton",
    role: "Investor",
    avatar: "/image-2.png",
  },
  {
    quote:
      "Best customer service so far. Amazing in all areas best centralized exchange.",
    name: "Savanna Bridgers",
    role: "Founder",
    avatar: "/image-3.png",
  },
];

export default function TestimonialsSection  () {
  return (
    <section className="flex flex-col items-center justify-center gap-16 max-[767px]:gap-[30px]  px-40 max-[1300px]:px-[50px] max-[767px]:px-[25px] max-[1000px]:py-[40px] py-[100px] relative w-full   bg-[#f7f5fd] shadow-[0px_4px_200px_#e8f9f733]">
      <div className="w-full h-[732px] top-0 bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_100%)] absolute left-0" />

      <header className="flex flex-col items-center gap-4 relative">
        <div className="relative w-fit  font-['Aeonik'] font-medium text-[#5235e8] text-base max-[1500px]:text-[14px] max-[1000px]:text-[13px] max-[767px]:text-[12px] tracking-[0.56px] leading-[19.6px] whitespace-nowrap">
          TESTIMONIALS
        </div>

        <h2 className="relative w-fit font-['Aeonik'] text-center font-medium text-[48px] max-[1500px]:text-[40px] max-[1000px]:text-[36px] max-[767px]:text-[28px] leading-[140%] tracking-[-1%] text-[#0e0637]">
          Trusted by more than 100K+ people
        </h2>

        <p className="relative w-fit font-['Aeonik'] text-center font-medium text-lg max-[1500px]:text-[16px] max-[767px]:text-[14px] leading-[160%] tracking-[0.5%] text-[#717184] text-center ">
          Hear what they say about us and why you should choose Coinbank
        </p>
      </header>

      <div className="flex items-start   max-[1020px]:flex-wrap max-[1020px]:items-center max-[1020px]:justify-center gap-8 max-[1100px]:gap-5 relative">
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            className="w-full max-w-[400px]  flex flex-col items-center gap-12  pt-12 pb-[52px] px-12 max-[1100px]:py-5 max-[1100px]:px-5 relative bg-white rounded-2xl border-0 shadow-none"
          >
            <CardContent className="flex flex-col items-center gap-12 p-0">
              <div className="flex items-start gap-3 relative">
                {[...Array(5)].map((_, starIndex) => (
                  <StarIcon
                    key={starIndex}
                    className="w-5 h-5 fill-current text-[#5235e8]"
                  />
                ))}
              </div>

              <div className="flex flex-col items-center gap-[42px] relative">
                <blockquote className="relative w-64 max-[767px]:w-[100%]  font-['Aeonik'] font-medium text-[18px] leading-[155%] tracking-[0] text-[#0e0637] text-[#0e0637] text-center ">
                &quot;{testimonial.quote}&quot;
                </blockquote>

                <div className="flex items-start justify-center gap-4 relative">
                  <Avatar className="w-12 h-12 max-[1500px]:w-10 max-[1500px]:h-10">
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="rounded-[100px] object-cover"
                    />
                    <AvatarFallback className="rounded-[100px]">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex flex-col items-start gap-0.5 relative">
                    <div className="relative w-fit  font-['Aeonik'] font-medium text-base max-[1500px]:text-[14px] leading-[145%] tracking-[0] text-[#0e0637] text-black whitespace-nowrap">
                      {testimonial.name}
                    </div>

                    <div className="relative w-fit  font-['Aeonik'] font-medium text-[14px] max-[1500px]:text-[12px] leading-[135%] tracking-[0] text-[#717184]  whitespace-nowrap">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
