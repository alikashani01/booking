import { useQuery } from "@tanstack/react-query";
import useArtistProfileStore from "../../profile/store";
import APIClient from "../apiClient";
import { Service } from "../entities/Service";

const apiClient = new APIClient("artist/service/list");

const useGetList = () => {
    const artistInfo = useArtistProfileStore((s) => s.artistInfo);
    const getList = useQuery<Service[], Error, Service[]>({
        queryKey: ["services"],
        queryFn: () =>
            apiClient.getAll({
                headers: {
                    Authorization: `Bearer ${artistInfo.token}`,
                },
            }),
        staleTime: 300000,
    });
    return getList;
};

export default useGetList;
