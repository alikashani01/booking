import { create } from "zustand";
import { CustomerInfo } from "../register/store";

interface CustomerDetails {
    fullName: string;
    mobile: string;
}
interface CustomerProfileStore {
    customerInfo: CustomerInfo;
    customerDetails: CustomerDetails;
    setCustomerDetails: (data: CustomerDetails) => void;
}

const useCustomerProfileStore = create<CustomerProfileStore>((set) => {
    const storage: Storage | null = window.localStorage;
    try {
        const storedCustomerInfo = storage?.getItem("customerInfo");
        const initialCustomerInfo: CustomerInfo = storedCustomerInfo
            ? JSON.parse(storedCustomerInfo)
            : {};
        return {
            customerInfo: initialCustomerInfo,
            customerDetails: {} as CustomerDetails,
            setCustomerDetails: (data) =>
                set(() => ({
                    customerDetails: data,
                })),
        };
    } catch (error) {}
    return {
        customerInfo: {
            _id: null,
            token: null,
        },
        customerDetails: {
            fullName: "",
            mobile: "",
        },
        setCustomerDetails: (data) =>
            set(() => ({
                customerDetails: data,
            })),
    };
});

export default useCustomerProfileStore;
