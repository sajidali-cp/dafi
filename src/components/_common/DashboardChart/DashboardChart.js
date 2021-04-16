import React, { PureComponent } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { toFixedNoRounding } from "../FixedNoRounding";
import styles from "./DashboardChart.module.scss";
import NumberFormat from 'react-number-format';
const noData = [{ name: "Group A", value: 400,fill:"#23fccf" }];

export default class DashboardChart extends PureComponent {
  render() {
    return (
      <div className={styles.wrapper}>
        <ResponsiveContainer width={200} height={200}>
          <PieChart onMouseEnter={this.onPieEnter}>
            {this.props.chartData.ChartData.length > 0 ? (
              <Pie
                data={this.props.chartData.ChartData}
                innerRadius={85}
                outerRadius={100}
                stroke="transparent"
                paddingAngle={5}
                dataKey="value"
                fill="#fff"
              />
            ) : (
              <Pie
                data={noData}
                innerRadius={85}
                outerRadius={100}
                stroke="transparent"
                paddingAngle={5}
                dataKey="value"
                fill="#fff"
              />
            )}
          </PieChart>
        </ResponsiveContainer>
        <div className={styles.portfolioInfo}>
          <div className={styles.totalWorth}>
          <NumberFormat value={toFixedNoRounding(this.props.chartData.dAsset || 0,2)} displayType={'text'} thousandSeparator={true} prefix={'$'} />
            </div>
          <div className={styles.totalAssets}>dAsset Value</div>
        </div>
      </div>
    );
  }
}
