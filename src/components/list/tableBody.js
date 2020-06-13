import React from "react";
import { withRouter } from "react-router-dom";
import renderChangePercent from "../../helpers/renderChangePercent";
import withCurrencies from "../../HOC/withCurrencies";

const TableBody = ({ currencies, history }) => (
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
);
export default withCurrencies(withRouter(TableBody));
