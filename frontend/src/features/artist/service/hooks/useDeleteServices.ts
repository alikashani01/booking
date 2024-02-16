import { useMutation } from "@tanstack/react-query";
import useArtistProfileStore from "../../profile/store";
import APIClient from "../apiClient";

const apiClient = new APIClient("artist/service/remove-all");

const useRemoveServices = () => {
    const artistInfo = useArtistProfileStore((s) => s.artistInfo);
    const removeServices = useMutation<Error>({
        mutationKey: ["removeServices"],
        mutationFn: () =>
            apiClient.deleteAll({
                headers: {
                    Authorization: `Bearer ${artistInfo.token}`,
                },
            }),
    });
    return removeServices;
};

export default useRemoveServices;
