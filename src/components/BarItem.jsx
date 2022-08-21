import React from "react";

function BarItem({ data, colorBg }) {
  return (
    <div
      style={{
        backgroundColor: colorBg,
        height: `${data.amount}%`,
        boxShadow: `1px 1px 3px ${colorBg}`,
      }}
      className="container-content-chart-bars-item"
      data-title={"$ " + data.amount}
    >
      <span className="no-select text-bar-item">{data.day}</span>
    </div>
  );
}

export default BarItem;
