import { AxiosRequestConfig } from "axios";
import { axiosInstance } from "../mainApiClient";
import { Book, DateTypes } from "./Entities";
import { DataProps } from "./hooks/useAddDay";

class APIClient {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = () => axiosInstance.get(this.endpoint).then((res) => res.data);

    post = (data: DateTypes) =>
        axiosInstance
            .post<DateTypes>(this.endpoint, data)
            .then((res) => res.data);

    addDate = (data: DataProps, config?: AxiosRequestConfig) =>
        axiosInstance
            .post<DataProps>(this.endpoint, data, config)
            .then((res) => res.data);

    submit = (data: Book, config: AxiosRequestConfig) =>
        axiosInstance
            .post<Book>(this.endpoint, data, config)
            .then((res) => res.data);
}

export default APIClient;
