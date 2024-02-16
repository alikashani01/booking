import { AxiosRequestConfig } from "axios";
import { axiosInstance } from "../../mainApiClient";
import { Service } from "./entities/Service";

class APIClient {
    endpoint: string;
    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }
    getAll = (config: AxiosRequestConfig = {}) => {
        return axiosInstance
            .get<Service[]>(this.endpoint, config)
            .then((res) => res.data);
    };
    get = (config: AxiosRequestConfig = {}) => {
        return axiosInstance
            .get<Service>(this.endpoint, config)
            .then((res) => res.data);
    };
    post = (data: Service, config: AxiosRequestConfig = {}) => {
        return axiosInstance
            .post<Service>(this.endpoint, data, config)
            .then((res) => res.data);
    };
    deleteAll = (config: AxiosRequestConfig = {}) => {
        return axiosInstance
            .delete(this.endpoint, config)
            .then((res) => res.data);
    };
}

export default APIClient;
