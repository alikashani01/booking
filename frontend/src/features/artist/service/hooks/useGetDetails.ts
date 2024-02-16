import { useQuery } from "@tanstack/react-query";
import useArtistProfileStore from "../../profile/store";
import APIClient from "../apiClient";
import { Service } from "../entities/Service";

const useGetDetails = (id: string) => {
    const apiClient = new APIClient(`artist/service/details/${id}`);
    const artistInfo = useArtistProfileStore((s) => s.artistInfo);
    const getDetails = useQuery<Service, Error, Service>({
        queryKey: ["service"],
        queryFn: () =>
            apiClient.get({
                headers: {
                    Authorization: `Bearer ${artistInfo.token}`,
                },
            }),
        staleTime: 300000,
    });
    return getDetails;
};

export default useGetDetails;
