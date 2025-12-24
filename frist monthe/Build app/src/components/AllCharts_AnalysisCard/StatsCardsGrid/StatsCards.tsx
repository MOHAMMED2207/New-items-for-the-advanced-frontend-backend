"use client";

import { LineChart, Line, ResponsiveContainer } from "recharts";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const data = [
  { value: 30 },
  { value: 40 },
  { value: 35 },
  { value: 50 },
  { value: 45 },
  { value: 60 },
];

type StatCardProps = {
  title: string;
  value: string;
  percent: string;
  trend: "up" | "down";
  subtitle: string;
};

export function StatCard({
  title,
  value,
  percent,
  trend,
  subtitle,
}: StatCardProps) {
  const isUp = trend === "up";

  return (
    <div className="relative rounded-2xl bg-card border border-border p-6 text-white">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-muted-foreground ">{title}</span>

        <span
          className={`flex items-center gap-1 text-sm px-2 py-1 rounded-full ${
            isUp
              ? "bg-green-500/10 text-green-400"
              : "bg-red-500/10 text-red-400"
          }`}
        >
          {isUp ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
          {percent}
        </span>
      </div>

      {/* Value */}
      <div className="text-3xl text-foreground font-bold mb-1">{value}</div>

      {/* Subtitle */}
      <div className=" flex gap-3 text-muted-foreground  justify-start items-center ">
        <p className="text-sm  ">{subtitle}</p>

        <span className=" gap-1 text-sm  rounded-full ">
          {isUp ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
        </span>
      </div>
      {/* Chart */}
      <div className="h-[60px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <Line
              type="monotone"
              dataKey="value"
              stroke={isUp ? "#22c55e" : "#ef4444"}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
