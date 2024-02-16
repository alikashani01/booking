import { Stack, Typography } from "@mui/material";
import useBookingStore from "../../../../../features/booking/store/store";

const Length = () => {
    const services = useBookingStore((s) => s.services);
    return (
        <Stack direction="row" gap="3px" alignItems="center">
            <Typography fontFamily="shabnam" color="#ddd" fontSize=".95rem">
                {services.length.toLocaleString("fa")}
            </Typography>

            <Typography fontFamily="shabnamthin" color="#777" fontSize=".8rem">
                سرویس انتخاب شده
            </Typography>
        </Stack>
    );
};

export default Length;
