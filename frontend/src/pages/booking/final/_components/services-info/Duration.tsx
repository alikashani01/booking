import { Stack, Typography } from "@mui/material";
import useBookingStore from "../../../../../features/booking/store/store";
import { useConvertEnglishNumbersToPersianNumbers } from "../../../../../hooks/convertEnglishNumbersToPersianNumbers";

const Duration = () => {
    const services = useBookingStore((s) => s.services);

    const duration = services.reduce(
        (acc, item) => {
            const totalMinutes =
                (item.duration?.hour || 0) * 60 + (item.duration?.minute || 0);
            acc.totalMinutes += totalMinutes;
            return acc;
        },
        { totalMinutes: 0 }
    );

    const hours = Math.floor(duration.totalMinutes / 60);
    const minutes = duration.totalMinutes % 60;

    const result = {
        hour: hours,
        minute: minutes,
    };

    return (
        <Stack direction="row" gap="3px" alignItems="center">
            <Typography fontFamily="shabnamthin" color="#aaa" fontSize=".8rem">
                مدت زمان
            </Typography>

            <Stack direction="row" alignItems="center" gap="2px">
                <Typography fontFamily="shabnam" color="#ddd" fontSize=".95rem">
                    {result.minute === 0
                        ? "۰۰"
                        : useConvertEnglishNumbersToPersianNumbers(
                              result.minute
                          )}
                </Typography>
                <Typography color="#666" fontFamily="shabnamthin">
                    :
                </Typography>
                <Typography fontFamily="shabnam" color="#ddd" fontSize=".95rem">
                    {result.hour === 0
                        ? "۰۰"
                        : useConvertEnglishNumbersToPersianNumbers(result.hour)}
                </Typography>
            </Stack>
        </Stack>
    );
};

export default Duration;
