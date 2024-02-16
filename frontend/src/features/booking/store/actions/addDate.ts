import { Service } from "../../../artist/service/entities/Service";
import { BookingInfo, DateTypes } from "../../Entities";

const addDate =
    (
        initialBookingInfo: BookingInfo,
        item: DateTypes,
        storage: Storage | null
    ) =>
    (state: { services: Service[] }) => {
        const newDate = item?.toString();
        const newBookingInfo = {
            artist: initialBookingInfo.artist,
            services: state.services,
            date: newDate,
        };
        try {
            storage?.setItem("bookingInfo", JSON.stringify(newBookingInfo));
        } catch (error) {
            console.error("Error saving data to localStorage:", error);
        }

        return {
            artist: initialBookingInfo.artist,
            services: state.services,
            date: newDate,
        };
    };

export default addDate;
