import { useQuery } from "@tanstack/react-query";
import useCustomerProfileStore from "../../customer/profile/store";
import { Book } from "../Entities";
import APIClient from "../apiClient";

const useGetBook = (bookId: string, userType: string) => {
    const apiClient = new APIClient(`${userType}/book/details/${bookId}`);
    const customerInfo = useCustomerProfileStore((s) => s.customerInfo);
    const submitBook = useQuery<string, Error, Book>({
        queryKey: ["bookDetails"],
        queryFn: () =>
            apiClient.getDetails({
                headers: {
                    authorization: `Bearer ${customerInfo.token}`,
                },
            }),
    });
    return submitBook;
};

export default useGetBook;
