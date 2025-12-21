"use client";

import Link from "next/link";
import GrandSales from "./home/GrandSales";
import Brands from "./components/Brands";
import Filter from "./components/Filter";
import CarCards from "./home/CarCards";
import FamilyPicksSection from "./home/FamilyPicksCards/index.jsx";
import LeaveYourContact from "./components/LeaveYourContact";
import SpecialOffersSection from "./home/SpecialOfferCards";
import LoanForm from "./components/LoanForm";

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
    </>
  )
}

export default Home;