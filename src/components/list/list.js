import React from "react";
import fetchServices from "../../services/fetch-service";

import "./list.css";

class List extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      currencies: [],
      error: null,
    };
  }

  currenciesGetter = async () => {
    const response = await fetchServices.get(
      "cryptocurrencies?page=1&perPage=20"
    );

    this.setState({
      currencies: response.currencies,
      loading: false,
    });
  };

  renderChangePercent = percent => {

    if (percent > 0) {
      return <span className="percent-raised">{percent}% &uarr;</span>
    } else if (percent < 0) {
      return <span className="percent-fallen">{percent}% &darr;</span>
    } else {
      return <span>{percent}</span>
    }
    
  };

  componentDidMount() {
    this.currenciesGetter();
  }

  render() {
    const { loading, currencies } = this.state;

    console.log(currencies);
    if (loading) {
      return <div>Loading...</div>;
    }
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
            {currencies.map((currency) => (
              <tr key={currency.id}>
                <td>
                  <span className="Table-rank">{currency.rank}</span>

                  {currency.name}
                </td>
                <td>
                  <span className="Table-dollar">$ </span>
                  {currency.price}
                </td>
                <td>
                  <span className="Table-dollar">$ </span>
                  {currency.marketCap}
                </td>
                <td>
                  <span className="Table-dollar"> </span>
                  {this.renderChangePercent(currency.percentChange24h)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default List;
