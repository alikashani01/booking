import { useMutation } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import useArtistProfileStore from "../store";

interface Name {
    firstName: string;
    lastName: string;
}

const apiClient = new APIClient<Name>("/artist/profile/name");

const useAddName = () => {
    const artistInfo = useArtistProfileStore((s) => s.artistInfo);
    const editName = useMutation<Name, Error, Name>({
        mutationKey: ["editName"],
        mutationFn: (data: Name) =>
            apiClient.post(data, {
                headers: {
                    authorization: `Bearer ${artistInfo.token}`,
                },
            }),
    });
    return editName;
};

export default useAddName;
