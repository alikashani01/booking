import { useQuery } from "@tanstack/react-query";
import { ArtistDetails } from "../../artist/profile/entities/Artist";
import APIClient from "../apiClient";

const apiClient = new APIClient("booking/artists");

const useGetArtists = () => {
    const getArtists = useQuery<ArtistDetails[], Error, ArtistDetails[]>({
        queryKey: ["artists"],
        queryFn: apiClient.getAll,
        staleTime: 300000,
    });
    return getArtists;
};

export default useGetArtists;
