import { AxiosRequestConfig } from "axios";
import { axiosInstance } from "../mainApiClient";

class APIClient {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getDetails = (config: AxiosRequestConfig) =>
        axiosInstance.get(this.endpoint, config).then((res) => res.data);
    getList = (config: AxiosRequestConfig) =>
        axiosInstance.get(this.endpoint, config).then((res) => res.data);
}

export default APIClient;
