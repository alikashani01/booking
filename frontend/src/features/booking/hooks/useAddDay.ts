import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { Service } from "../../artist/service/entities/Service";
import useRegisterStore from "../../customer/register/store";
import APIClient from "../apiClient";

export interface DataProps {
    artist: string;
    customer: string;
    day: string;
    services: Service[];
}

interface ErrorMessage {
    message?: string;
}

export const useAddDay = () => {
    const apiClient = new APIClient(`booking/date`);
    const token = useRegisterStore((s) => s.customerInfo.token);
    const config = { headers: { authorization: `Bearer ${token}` } };
    const addDay = useMutation<number[], AxiosError<ErrorMessage>, DataProps>({
        mutationFn: (data: DataProps) => apiClient.addDate(data, config),
    });
    return addDay;
};
