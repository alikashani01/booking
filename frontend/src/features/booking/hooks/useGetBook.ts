import { useMutation } from "@tanstack/react-query";
import useCustomerProfileStore from "../../customer/profile/store";
import { Book } from "../Entities";
import APIClient from "../apiClient";

const useGetBook = (bookId: string) => {
    const apiClient = new APIClient(`booking/book/${bookId}`);
    const customerInfo = useCustomerProfileStore((s) => s.customerInfo);
    const submitBook = useMutation<Book, Error, Book>({
        mutationKey: ["bookDetails"],
        mutationFn: (data: Book) =>
            apiClient.submit(data, {
                headers: {
                    authorization: `Bearer ${customerInfo.token}`,
                },
            }),
    });
    return submitBook;
};

export default useGetBook;
