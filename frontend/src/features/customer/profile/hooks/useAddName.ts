import { useMutation } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import useCustomerProfileStore from "../store";

interface Name {
    fullName: string;
}

const apiClient = new APIClient<Name>("/customer/profile/name");

const useAddName = () => {
    const customerInfo = useCustomerProfileStore((s) => s.customerInfo);
    const editName = useMutation<Name, Error, Name>({
        mutationKey: ["editName"],
        mutationFn: (data: Name) =>
            apiClient.post(data, {
                headers: {
                    authorization: `Bearer ${customerInfo.token}`,
                },
            }),
    });
    return editName;
};

export default useAddName;
