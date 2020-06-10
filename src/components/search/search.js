import React from "react";
import fetchService from "../../services/fetch-service";
import Loading from "../loading/loading";
import {debounce} from "../../helpers/debounce";
import { withRouter } from "react-router-dom";
import "./search.css";

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      searchResults: [],
      searchQuery: "",
      loading: false,
    };
  }

  handleChange = async (e) => {
    const { value } = e.target;
    this.setState({
      searchQuery: value,
    });

    if (!value) return null;

    this.setState({
      loading: true,
    });

    this.fetchCurrencies(value);
  };

  fetchCurrencies = async (value) => {
    const response = await fetchService.get(
      `autocomplete?searchQuery=${value}`
    );

    this.setState({
      searchResults: response,
      loading: false,
    });
  };

  componentDidMount() {
    this.fethcData = debounce((value) => this.fetchCurrencies(value), 1000);
  }

  handleRedirect = (currencyId) => {
    this.setState({
      searchResults: [],
      searchQuery: "",
    });

    this.props.history.push(`/currency/${currencyId}`);
  };

  renderSearchResult = () => {
    const { loading, searchResults, searchQuery } = this.state;
    if (!searchQuery) {
      return "";
    }

    if (searchResults.length > 0) {
      return (
        <div className="Search-result-container">
          {searchResults.map((result) => (
            <div
              key={result.id}
              className="Search-result"
              onClick={() => this.handleRedirect(result.id)}
            >
              {result.name} ({result.symbol})
            </div>
          ))}
        </div>
      );
    }

    if (!loading) {
      return (
        <div className="Search-result-container">
          <div className="Search-no-result">No results found.</div>
        </div>
      );
    }
  };

  render() {
    const { searchQuery, loading } = this.state;

    return (
      <div className="Search">
        <span className="Search-icon" />
        <input
          className="Search-input"
          type="text"
          placeholder="Currency name"
          value={searchQuery}
          onChange={this.handleChange}
        />

        {loading && (
          <div className="Search-loading">
            <Loading width="12px" height="12px" />
          </div>
        )}

        {this.renderSearchResult()}
      </div>
    );
  }
}

export default withRouter(Search);
