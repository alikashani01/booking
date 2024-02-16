import { useQuery } from "@tanstack/react-query";
import { CustomerDetails } from "../entities/Customer";
import APIClient from "../services/apiClient";
import useCustomerProfileStore from "../store";

const apiClient = new APIClient<CustomerDetails>("/customer/profile/details");

const useGetDetails = () => {
    const customerInfo = useCustomerProfileStore((s) => s.customerInfo);

    return useQuery<CustomerDetails, Error, CustomerDetails>({
        queryKey: ["customer"],
        queryFn: () =>
            apiClient.getDetails({
                headers: {
                    authorization: `Bearer ${customerInfo.token}`,
                },
            }),
        staleTime: 30000,
        refetchOnWindowFocus: false,
        retry: false,
    });
};
export default useGetDetails;
