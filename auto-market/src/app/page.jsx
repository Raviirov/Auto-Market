"use client";

import Link from "next/link";
import GrandSales from "./home-page/GrandSales";
import Brands from "./components/Brands";
import Filter from "./components/Filter";
import CarCards from "./home-page/CarCards";
import FamilyPicksSection from "./home-page/FamilyPicksCards/index.jsx";
import LeaveYourContact from "./home-page/LeaveYourContact";
import SpecialOffersSection from "./home-page/SpecialOfferCards";
import LoanForm from "./home-page/LoanForm";
import PartnersBanks from "./home-page/PartnersBanks";

function Home() {
  
  return (
    <>
      <GrandSales />
      <div className="brands-filter-container">
        <Brands />
        <Filter />
      </div>
      <CarCards />
      <FamilyPicksSection />
      <LeaveYourContact />
      <SpecialOffersSection />
      <LoanForm />
      <PartnersBanks />
    </>
  )
}

export default Home;