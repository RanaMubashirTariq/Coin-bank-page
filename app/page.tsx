'use client'
import React , {useState} from 'react'
import BlockchainTypesSection from "./screen/BlockchainTypesSection/BlockchainTypesSection";
import CallToActionFooterSection from "./screen/CallToActionFooterSection/CallToActionFooterSection";
import FeaturesListSection from "./screen/FeaturesListSection/FeaturesListSection";
import FeaturesSection from "./screen/FeaturesSection/FeaturesSection";
import HeroSection from "./screen/HeroSection/HeroSection";
import SignInModalDemo from "./screen/SignIn/SignIn";
import  TestimonialsSection  from "./screen/TestimonialsSection/TestimonialsSection";
import TradingInsightsSection from "./screen/TradingInsightsSection/TradingInsightsSection";
import TradingOverviewSection from "./screen/TradingOverviewSection/TradingOverviewSection";
import TrustedBySection from "./screen/TrustedBySection/TrustedBySection";



export default function Home() {
       
  const [isModalOpen, setIsModalOpen] = useState(false);
    
  return (
    <div className="w-full overflow-hidden bg-white">
              <HeroSection onSignInClick={() => setIsModalOpen(true)} />
              <SignInModalDemo open={isModalOpen} onClose={() => setIsModalOpen(false)} />
              <TrustedBySection/>
                  <section id="dashboard">
                  <FeaturesSection/>
                  </section>
                  <section id="portfolio">
                  <FeaturesListSection/>
                  </section>
               <section id="wallet">
               <TradingOverviewSection/>
               </section>
              <section id="trading">
              <BlockchainTypesSection/>
              </section>
              <section id="cards">
              <TestimonialsSection/>
              </section>
              <section id="careers">
              <TradingInsightsSection/>
              </section>
              <CallToActionFooterSection/>
    </div>
  );
}
