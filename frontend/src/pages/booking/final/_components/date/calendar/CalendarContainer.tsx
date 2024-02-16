import EditIcon from "@mui/icons-material/Edit";
import { Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { Calendar, DateObject } from "react-multi-date-picker";
import useBookingStore from "../../../../../../features/booking/store/store";
import "./styles.css";
import styles from "./styles.module.css";
import { DateTypes } from "../../../../../../features/booking/Entities";
import { useAddDay } from "../../../../../../features/booking/hooks/useAddDay";
import useGetDetails from "../../../../../../features/customer/profile/hooks/useGetDetails";

const CalendarContainer = () => {
    const [edit, setEdit] = useState(false);

    const date = useBookingStore((s) => s.date!);
    const artist = useBookingStore((s) => s.artist._id);
    const services = useBookingStore((s) => s.services);
    const { data } = useGetDetails();

    useEffect(() => {
        date ? setEdit(true) : setEdit(false);
    }, [date]);

    const setDay = useBookingStore((s) => s.setDay);
    const addDay = useAddDay();

    const handleDateChange = (date: DateTypes) => {
        setDay(date);
        addDay.mutate({
            artist: artist!,
            customer: data?._id!,
            day: date?.toString() || "",
            services,
        });
    };

    return (
        <div className={styles.container}>
            {!edit ? (
                <Calendar
                    maxDate={new DateObject({ calendar: persian }).set(
                        "day",
                        60
                    )}
                    calendar={persian}
                    locale={persian_fa}
                    onChange={handleDateChange}
                />
            ) : (
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    padding="15px 20px"
                >
                    <Typography
                        fontFamily="shabnam"
                        color="#eee"
                        fontSize="1.15rem"
                        letterSpacing={4}
                        paddingTop="3px"
                    >
                        {date.toString()}
                    </Typography>
                    <button id={styles.edit_btn} onClick={() => setEdit(false)}>
                        <EditIcon
                            sx={{ fontSize: "1.2rem", color: "#0288e0" }}
                        />
                    </button>
                </Stack>
            )}
        </div>
    );
};

export default CalendarContainer;
