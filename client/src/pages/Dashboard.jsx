import React from "react";
import StatCard from "./StatCard";
import { Calendar } from "../components/ui/calendar";

const Dashboard = () => {
  return (
    <div className="p-6">
      <div className="grid grid-cols-4 gap-6 max-w-[1300px] mx-auto">
        <StatCard
          title="Today"
          amount={450}
          color="bg-gradient-to-br from-[#064e3b] to-[#10b981]"
        />

        <StatCard
          title="Monthly"
          amount={12450}
          color="bg-gradient-to-br from-[#7c5a00] to-[#facc15]"
        />

        <StatCard
          title="Avg Monthly"
          amount={8200}
          color="bg-gradient-to-br from-[#2e1065] to-[#8b5cf6]"
        />

        <StatCard
          title="Yearly"
          amount={156300}
          color="bg-gradient-to-br from-[#7f1d1d] to-[#ef4444]"
        />
      </div>
      <div className="flex items-center justify-center mt-15">
        <Calendar className="w-200" />
      </div>
    </div>
  );
};

export default Dashboard;
