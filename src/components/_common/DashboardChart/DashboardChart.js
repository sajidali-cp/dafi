import React, { PureComponent } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { toFixedNoRounding } from "../FixedNoRounding";
import styles from "./DashboardChart.module.scss";
import NumberFormat from 'react-number-format';
const noData = [{ name: "Group A", value: 400,fill:"#23fccf" }];

export default class DashboardChart extends PureComponent {
  render() {
    console.log(this.props.chartData)
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
            {/* <Pie
              data={data.length > 0 ? data : noData}
              innerRadius={100}
              outerRadius={120}
              fill="#8884d8"
              stroke="transparent"
              paddingAngle={5}
              dataKey="value"
            >
              {data.length > 0 && data.map((_entry, index) => (
                <Cell key="1" fill={COLORS[index % COLORS.length]} />
              ))}
              {data.length === 0 && noData.map((_entry, index) => (
                <Cell key="1" fill={noDataColor[index % COLORS.length]} />
              ))}
            </Pie> */}
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
