// this class is created by using singletone pattern

class FetchServices {
  static instance = null;

  #DOMAIN = "https://api.udilia.com/coins/v1";

  constructor() {
    if (FetchServices.instance) {
      return FetchServices.instance;
    }

    FetchServices.instance = this;
  }

  async get(url) {
    const path = `${this.#DOMAIN}/${url}`;
    const response = await fetch(path);

    return response.json();
  }
}

const fetchServices = new FetchServices();

export default fetchServices;
