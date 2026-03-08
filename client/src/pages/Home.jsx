import React from "react";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white">
      <Navbar />
      <Dashboard />
    </div>
  );
};

export default Home;
