import React from "react";
import fetchServices from "../../services/fetch-service";
import Pagination from "../../components/pagination/pagination";
import Table from "./table";

import "./list.css";
import Loading from "../loading/loading";

class List extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      currencies: [],
      error: null,
      page: 1,
      totalPages: 0,
    };
  }

  handlePaginationClick = (direction) => {
    if (direction === "next") {
      this.setState((prev) => ({ page: prev.page + 1 }), this.currenciesGetter);
    } else {
      this.setState((prev) => ({ page: prev.page - 1 }), this.currenciesGetter);
    }
  };

  currenciesGetter = async () => {
    const { page } = this.state;
    const response = await fetchServices.get(
      `cryptocurrencies?page=${page}&perPage=20`
    );

    this.setState({
      currencies: response.currencies,
      loading: false,
      totalPages: response.totalPages,
      page: response.page
    });
  };

  renderChangePercent = (percent) => {
    if (percent > 0) {
      return <span className="percent-raised">{percent}% &uarr;</span>;
    } else if (percent < 0) {
      return <span className="percent-fallen">{percent}% &darr;</span>;
    } else {
      return <span>{percent}</span>;
    }
  };

  componentDidMount() {
    this.currenciesGetter();
  }

  render() {
    const { loading, currencies, totalPages, page } = this.state;

    if (loading) {
      return <div className='loading-container'>
        <Loading/>
      </div>;
    }
    return (
      <>
        <Table
          currencies={currencies}
          renderChangePercent={this.renderChangePercent}
        />
        <Pagination
          handlePaginationClick={this.handlePaginationClick}
          totalPages={totalPages}
          page={page}
        />
      </>
    );
  }
}

export default List;
