import { create } from "zustand";
import { ArtistInfo } from "../register/store";

interface ArtistDetails {
    firstName?: string;
    lastName?: string;
    mobile?: string;
}
interface ArtistProfileStore {
    artistInfo: ArtistInfo;
    artistDetails: ArtistDetails;
    setArtistDetails: (data?: ArtistDetails) => void;
}

const useArtistProfileStore = create<ArtistProfileStore>((set) => {
    const storage: Storage | null = window.localStorage;
    try {
        const storedArtistInfo = storage?.getItem("artistInfo");
        const initialArtistInfo: ArtistInfo = storedArtistInfo
            ? JSON.parse(storedArtistInfo)
            : {};
        return {
            artistInfo: initialArtistInfo,
            artistDetails: {} as ArtistDetails,
            setArtistDetails: (data) =>
                set(() => ({
                    artistDetails: data,
                })),
        };
    } catch (error) {}
    return {
        artistInfo: {
            _id: null,
            token: null,
        },
        artistDetails: {
            firstName: "",
            lastName: "",
            mobile: "",
        },
        setArtistDetails: (data) =>
            set(() => ({
                artistDetails: data,
            })),
    };
});

export default useArtistProfileStore;
