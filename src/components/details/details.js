import React, { Component } from "react";
import fetchServices from "../../services/fetch-service";
import Loading from "../loading/loading";
import renderChangePercent from "../../helpers/renderChangePercent";
import "./details.css";

class Details extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      loading: true,
      currency: {},
    };
  }

  getCurrency = async () => {
    const currencyId = this.props.match.params.id;
    const response = await fetchServices.get(`cryptocurrencies/${currencyId}`);
    this.setState({
      currency: response,
      loading: false,
    });
  };

  componentDidMount() {
    this.getCurrency();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.getCurrency();
    }
  }

  render() {
    const { currency, loading } = this.state;

    if (loading) {
      return (
        <div className="loading-container">
          <Loading />
        </div>
      );
    }
    return (
      <div className="Detail">
        <h1 className="Detail-heading">
          {currency.name} ({currency.symbol})
        </h1>
        <div className="Detail-container">
          <div className="Detail-item">
            Price <span className="Detail-value">$ {currency.price}</span>
          </div>
          <div className="Detail-item">
            Rank <span className="Detail-value">{currency.rank}</span>
          </div>
          <div className="Detail-item">
            24H Change
            <span className="Detail-value">
              {renderChangePercent(currency.percentChange24h)}
            </span>
          </div>
          <div className="Detail-item">
            <span className="Detail-title">Market cap</span>
            <span className="Detail-dollar">$</span>
            {currency.marketCap}
          </div>
          <div className="Detail-item">
            <span className="Detail-title">24H Volume</span>
            <span className="Detail-dollar">$</span>
            {currency.volume24h}
          </div>
          <div className="Detail-item">
            <span className="Detail-title">Total supply</span>
            {currency.totalSupply}
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
