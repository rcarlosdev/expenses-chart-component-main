import React from "react";
import BarItem from "./BarItem";

function Containerchart({ data }) {
  let maxValue = Math.max(...data.map(({ amount }) => amount));

  return (
    <div className="container">
      <div className="container-title">
        <div>
          <small>My balance</small>
          <h3>$921.48</h3>
        </div>
        <img src="./logo.svg" alt="logo"></img>
      </div>

      <div className="container-content">
        <div className="container-content-chart">
          <span className="container-content-chart-title">
            Spending - Last 7 days
          </span>

          <div className="container-content-chart-bars">
            {data.map((item) => (
              <BarItem
                key={item.day}
                data={item}
                colorBg={
                  maxValue === item.amount ? "var(--Soft_red)" : "var(--Cyan)"
                }
              />
            ))}
          </div>
        </div>
        <hr />
        <div className="container-content-footer">
          <div>
            <span className="subtitle">Total this month</span>
            <span className="total-month">$478.33</span>
          </div>
          <div>
            <span className="procent-month">+2.4%</span>
            <span className="subtitle">from last month</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Containerchart;
