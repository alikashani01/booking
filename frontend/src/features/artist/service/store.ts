import { create } from "zustand";
import { Service } from "./entities/Service";

interface ServiceStore {
    serviceDetails: Service;
    services: Service[];
    setServices: (data: Service[]) => void;
    setServiceDetails: (data: Service) => void;
}

const useArtistServiceStore = create<ServiceStore>((set) => ({
    services: [],
    serviceDetails: {} as Service,
    setServices: (data) =>
        set(() => ({
            services: data,
        })),
    setServiceDetails: (data) =>
        set(() => ({
            serviceDetails: data,
        })),
}));

export default useArtistServiceStore;
