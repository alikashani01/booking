import { useQuery } from "@tanstack/react-query";
import useArtistProfileStore from "../../artist/profile/store";
import useCustomerProfileStore from "../../customer/profile/store";
import { Book } from "../Entities";
import APIClient from "../apiClient";

const useGetBooks = (userType: string) => {
    const apiClient = new APIClient(`${userType}/book/list`);
    const customerInfo = useCustomerProfileStore((s) => s.customerInfo);
    const artistInfo = useArtistProfileStore((s) => s.artistInfo);
    const userInfo =
        userType === "customer"
            ? customerInfo
            : userType === "artist"
            ? artistInfo
            : customerInfo;
    return useQuery<Book[], Error>({
        queryKey: ["books"],
        queryFn: () =>
            apiClient.getList({
                headers: {
                    authorization: `Bearer ${userInfo.token}`,
                },
            }),
        staleTime: 10000,
    });
};

export default useGetBooks;
