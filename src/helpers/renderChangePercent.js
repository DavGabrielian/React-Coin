import React from "react";

const renderChangePercent = (percent) => {
  if (percent > 0) {
    return <span className="percent-raised">{percent}% &uarr;</span>;
  } else if (percent < 0) {
    return <span className="percent-fallen">{percent}% &darr;</span>;
  } else {
    return <span>{percent}</span>;
  }
};

export default renderChangePercent;
