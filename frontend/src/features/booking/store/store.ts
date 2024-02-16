import { create } from "zustand";
import { Service } from "../../artist/service/entities/Service";
import { BookingInfo, BookingStore, DateTypes } from "../Entities";
import addDay from "./actions/addDate";
import addItem from "./actions/addService";
import addTime from "./actions/addTime";

const useBookingStore = create<BookingStore>((set) => {
    const storage: Storage | null = window.localStorage;

    try {
        const storedBookingInfo = storage?.getItem("bookingInfo");

        const initialBookingInfo: BookingInfo = storedBookingInfo
            ? JSON.parse(storedBookingInfo)
            : {
                  artist: {},
                  services: [],
                  date: {},
              };

        return {
            artist: initialBookingInfo.artist,
            services: initialBookingInfo.services,
            date: initialBookingInfo.date,
            times: [],
            time: 9,
            setArtist: (data) => {
                const newBookingInfo = { artist: data, services: [] };
                localStorage.setItem(
                    "bookingInfo",
                    JSON.stringify(newBookingInfo)
                );
                window.location.pathname = "/booking/services";
            },
            toggleService: (item) =>
                set(addItem(initialBookingInfo, item, storage)),
            setDay: (item) => set(addDay(initialBookingInfo, item, storage)),
            setTimes: (data) => set(() => ({ times: data })),
            setTime: (data) => set(addTime(initialBookingInfo, data, storage)),
        };
    } catch (error) {
        console.error(error);
    }

    return {
        artist: {
            firstName: "",
            lastName: "",
            mobile: "",
        },
        services: [] as Service[],
        date: "" || ([] as DateTypes),
        times: [],
        time: 9,
        setArtist: () => {},
        toggleService: () => {},
        setDay: () => {},
        setTimes: () => {},
        setTime: () => {},
    };
});

export default useBookingStore;
