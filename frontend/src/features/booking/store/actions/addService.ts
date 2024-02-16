import { Service } from "../../../artist/service/entities/Service";
import { BookingInfo } from "../../Entities";

const addItem =
    (initialBookingInfo: BookingInfo, item: Service, storage: Storage | null) =>
    (state: { services: Service[] }) => {
        const itemExists = state.services.find((i) => {
            const isIdMatch = i._id === item._id;

            return isIdMatch;
        });

        if (!itemExists) {
            const newItems = [item, ...state.services];
            const newBookingInfo = {
                artist: initialBookingInfo.artist,
                services: newItems,
            };
            try {
                storage?.setItem("bookingInfo", JSON.stringify(newBookingInfo));
            } catch (error) {
                console.error("Error saving data to localStorage:", error);
            }

            return {
                artist: initialBookingInfo.artist,
                services: newItems,
            };
        } else {
            const newItems = state.services.filter(
                (i) => i._id !== itemExists._id
            );
            const newBookingInfo = {
                artist: initialBookingInfo.artist,
                services: newItems,
            };

            try {
                storage?.setItem("bookingInfo", JSON.stringify(newBookingInfo));
            } catch (error) {
                console.error("Error saving data to localStorage:", error);
            }

            return {
                artist: initialBookingInfo.artist,
                services: newItems,
            };
        }
    };

export default addItem;
