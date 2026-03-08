const StatCard = ({ title, amount, color }) => {
  return (
    <div>
      <div
        className={`h-[110px] w-[240px] ${color} rounded-xl shadow-lg flex items-center justify-between px-5 backdrop-blur-md border border-blue/20 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl`}
      >
        {/* leftside Title */}
        <div className="text-white/80 ml-4 text-xl font-semibold">{title}</div>
        <div className="flex items-end gap-1 text-white">
          <span className="text-xl opacity-80">₹</span>
          <span className="text-2xl font-semibold">{amount}</span>
        </div>
      </div>
    </div>
  );
};
export default StatCard;
