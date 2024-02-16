import { AxiosRequestConfig } from "axios";
import { axiosInstance } from "../../../mainApiClient";

class APIClient<T> {
    endpoint: string;
    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }
    getDetails = (config: AxiosRequestConfig) => {
        return axiosInstance
            .get<T>(this.endpoint, config)
            .then((res) => res.data);
    };
    post = (data: T, config: AxiosRequestConfig = {}) => {
        return axiosInstance
            .patch<T, AxiosRequestConfig>(this.endpoint, data, config)
            .then((res) => res.data);
    };
}

export default APIClient;
