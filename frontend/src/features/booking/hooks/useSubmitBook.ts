import { useMutation } from "@tanstack/react-query";
import useCustomerProfileStore from "../../customer/profile/store";
import { Book } from "../Entities";
import APIClient from "../apiClient";

const useSubmitBook = () => {
    const apiClient = new APIClient(`booking/submit`);
    const customerInfo = useCustomerProfileStore((s) => s.customerInfo);
    const submitBook = useMutation<Book, Error, Book>({
        mutationKey: ["submitBook"],
        mutationFn: (data: Book) =>
            apiClient.submit(data, {
                headers: {
                    authorization: `Bearer ${customerInfo.token}`,
                },
            }),
        onSuccess: (savedData: Book) => {
            localStorage.removeItem("bookingInfo");
            window.location.pathname = `/booking/result/${savedData._id}`;
        },
    });
    return submitBook;
};

export default useSubmitBook;
