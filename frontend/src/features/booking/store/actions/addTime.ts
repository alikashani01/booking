import { Service } from "../../../artist/service/entities/Service";
import { BookingInfo, DateTypes } from "../../Entities";

const addTime =
    (initialBookingInfo: BookingInfo, item: number, storage: Storage | null) =>
    (state: { services: Service[]; date: DateTypes }) => {
        const newBookingInfo = {
            artist: initialBookingInfo.artist,
            services: state.services,
            date: state.date,
            time: item,
        };
        try {
            storage?.setItem("bookingInfo", JSON.stringify(newBookingInfo));
        } catch (error) {
            console.error("Error saving data to localStorage:", error);
        }

        return {
            artist: initialBookingInfo.artist,
            services: state.services,
            time: item,
        };
    };

export default addTime;
