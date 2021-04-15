import React from "react";
import {
  AreaChart,
  Area,
  YAxis,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import styles from "./Dashboard.module.scss";
import { isNumber } from "lodash";
import format from "date-fns/format";
import { toFixedNoRounding } from "../_common/FixedNoRounding";

const DashboarAreaChart = ({ spark24H }: any) => {
  const CustomTooltip = ({ active, label, payload }: any) => {
    if (active) {
      if (payload) {
        const {
          payload: { price },
        } = payload[0];
        return (
          <div className={styles.tooltipContentStyle}>
            <div className={styles.labelStyle}>
              {format(label, "do MMM yy")}
            </div>
            <div className={styles.ItemStyle}>
              {toFixedNoRounding(price, 4)}
            </div>
          </div>
        );
      }
    }

    return null;
  };
  return (
    <div className={styles.chart}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={spark24H}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#2EC1B2" stopOpacity={0.2} />
              <stop offset="95%" stopColor="#2EC1B2" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid
            vertical={false}
            stroke="white"
            strokeWidth={1}
            strokeOpacity={0.08}
            y={2}
          />
          <XAxis
            dataKey="date"
            tickFormatter={(val) => {
              if (!isNumber(val)) {
                return "";
              }
              return format(val, "do MMM yy");
            }}
          />
          <YAxis
            tickCount={5}
            hide={false}
            axisLine={true}
            tickLine={false}
            fontSize={14}
            fontWeight={500}
            stroke="#4B4B4B"
          />
          <Tooltip content={<CustomTooltip />} animationDuration={0} />
          <Area
            type="linear"
            dataKey="price"
            stroke="#2EC1B2"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="url(#colorUv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DashboarAreaChart;
