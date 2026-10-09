import { connection } from "next/server";

const TodaysDate = async () => {
  await connection();

  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
    timeZone: "Asia/Dhaka",
  });

  return (
    <p className="min-h-5 truncate text-xs text-slate-500 sm:text-sm">{date}</p>
  );
};

export default TodaysDate;