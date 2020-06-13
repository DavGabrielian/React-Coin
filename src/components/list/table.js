import React from "react";
import TableBody from "./tableBody";

const Table = () => {
  return (
    <div className="Table-container">
      <table className="Table">
        <thead className="Table-head">
          <tr>
            <th>Cryptocurrency</th>
            <th>Price</th>
            <th>Market Cap</th>
            <th>24H Change</th>
          </tr>
        </thead>
        <TableBody />
      </table>
    </div>
  );
};

export default Table;
