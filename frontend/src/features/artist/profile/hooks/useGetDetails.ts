import { useQuery } from "@tanstack/react-query";
import { ArtistDetails } from "../entities/Artist";
import APIClient from "../services/apiClient";
import useArtistProfileStore from "../store";

const apiClient = new APIClient<ArtistDetails>("/artist/profile/details");

const useGetDetails = () => {
    const artistInfo = useArtistProfileStore((s) => s.artistInfo);
    return useQuery<ArtistDetails, Error, ArtistDetails>({
        queryKey: ["artist"],
        queryFn: () =>
            apiClient.getDetails({
                headers: {
                    authorization: `Bearer ${artistInfo.token}`,
                },
            }),
        staleTime: 30000, // 30 seconds
        refetchOnWindowFocus: false,
    });
};

export default useGetDetails;
