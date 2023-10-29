// import { API_ORDER_REQUEST, API_SEARCH } from "src/helpers/client/services/apis";
import { API_HOME_PAGE } from './apis';
import Axios from './axios';

const SimServer = {
    async getDataSim() {
        const res = await Axios.get(API_HOME_PAGE);
        return res?.data;
    },
};

export default SimServer;
