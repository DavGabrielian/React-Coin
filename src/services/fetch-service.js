// this class is created by using singletone pattern

class FetchServices {

    static instance = null;

    constructor() {
        if(FetchServices.instance){

            return FetchServices.instance
        }

        FetchServices.instance = this;
    }


}

const fetchServices = new FetchServices();

export default fetchServices;