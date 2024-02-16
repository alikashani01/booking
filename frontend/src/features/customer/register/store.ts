import { create } from "zustand";

export interface CustomerInfo {
    _id: string | null;
    token: string | null;
}

interface RegisterStore {
    customerInfo: CustomerInfo;
    setCustomerInfo: (id: string, token: string) => void;
}

const useRegisterStore = create<RegisterStore>((set) => {
    const storage: Storage | null = window.localStorage;

    if (!storage) {
        console.error("localStorage is not supported in this browser.");
    }

    try {
        return {
            customerInfo: {} as CustomerInfo,
            setCustomerInfo: (_id, token) =>
                set(() => {
                    storage?.setItem(
                        "customerInfo",
                        JSON.stringify({ _id, token })
                    );
                    console.error("Error saving data to localStorage:");
                    return { customerInfo: { _id, token } };
                }),
        };
    } catch (error) {
        console.error("Error loading data from localStorage:", error);
    }

    return {
        customerInfo: { _id: null, token: null },
        setCustomerInfo: () => {},
    };
});

export default useRegisterStore;
