"use client";

import Link from "next/link";
import GrandSales from "./home/GrandSales";
import Brands from "./components/Brands";
import Filter from "./components/Filter";
import CarCards from "./home/CarCards";
import FamilyPicksSection from "./home/FamilyPicksCards/indexpage.jsx";
import LeaveYourContact from "./components/LeaveYourContact";

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
    </>
  )
}

export default Home;