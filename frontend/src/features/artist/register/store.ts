import { create } from "zustand";

export interface ArtistInfo {
    _id: string | null;
    token: string | null;
}

interface RegisterStore {
    artistInfo: ArtistInfo;
    setArtistInfo: (id: string, token: string) => void;
}

const useRegisterStore = create<RegisterStore>((set) => {
    const storage: Storage | null = window.localStorage;

    if (!storage) {
        console.error("localStorage is not supported in this browser.");
    }

    try {
        return {
            artistInfo: {} as ArtistInfo,
            setArtistInfo: (_id, token) =>
                set(() => {
                    storage?.setItem(
                        "artistInfo",
                        JSON.stringify({ _id, token })
                    );
                    return { artistInfo: { _id, token } };
                }),
        };
    } catch (error) {
        console.error("Error loading data from localStorage:", error);
    }

    return {
        artistInfo: { _id: null, token: null },
        setArtistInfo: () => {},
    };
});

export default useRegisterStore;
