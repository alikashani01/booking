import { useMutation } from "@tanstack/react-query";
import useArtistProfileStore from "../../profile/store";
import APIClient from "../apiClient";
import { Service } from "../entities/Service";

const apiClient = new APIClient("artist/service/add");

const useAddService = () => {
    const artistInfo = useArtistProfileStore((s) => s.artistInfo);
    const addService = useMutation<Service, Error, Service>({
        mutationKey: ["addService"],
        mutationFn: (data: Service) =>
            apiClient.post(data, {
                headers: {
                    Authorization: `Bearer ${artistInfo.token}`,
                },
            }),
        onSuccess() {
            document.location.pathname = "/artist/services";
        },
    });
    return addService;
};

export default useAddService;
