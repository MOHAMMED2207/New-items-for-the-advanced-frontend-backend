"use client";

import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

interface ChartProps {
  data: { name: string; value: number }[];
}

export const Chart: React.FC<ChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={150}>
      <LineChart data={data}>
        <XAxis dataKey="name" stroke="#8884d8" />
        <YAxis stroke="#8884d8" />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#82ca9d" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
};
