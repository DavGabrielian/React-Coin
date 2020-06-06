import React from "react";
import { withRouter } from "react-router-dom";
import renderChangePercent from "../../helpers/renderChangePercent";

const Table = ({ currencies, history, ...props }) => {
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
        <tbody className="Table-body">
          {currencies.map(
            ({ id, name, price, rank, marketCap, percentChange24h }) => (
              <tr key={id} onClick={() => history.push(`/currency/${id}`)}>
                <td>
                  <span className="Table-rank">{rank}</span>
                  {name}
                </td>
                <td>
                  <span className="Table-dollar">$ </span>
                  {price}
                </td>
                <td>
                  <span className="Table-dollar">$ </span>
                  {marketCap}
                </td>
                <td>
                  <span className="Table-dollar"> </span>
                  {renderChangePercent(percentChange24h)}
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default withRouter(Table);
