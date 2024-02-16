import { useQuery } from "@tanstack/react-query";
import { Service } from "../../artist/service/entities/Service";
import APIClient from "../apiClient";

const useGetServices = (artistId: string) => {
    const apiClient = new APIClient(`booking/services/${artistId}`);
    const getServices = useQuery<Service[], Error, Service[]>({
        queryKey: ["services", artistId],
        queryFn: apiClient.getAll,
        staleTime: 300000,
    });
    return getServices;
};

export default useGetServices;
