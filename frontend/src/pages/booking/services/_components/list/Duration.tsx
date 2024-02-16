import { Stack, Typography } from "@mui/material";
import { useConvertEnglishNumbersToPersianNumbers } from "../../../../../hooks/convertEnglishNumbersToPersianNumbers";

interface Props {
    hour: number;
    minute: number;
}
const Duration = ({ hour, minute }: Props) => {
    return (
        <Stack direction="row" gap="3px" alignItems="center">
            <Typography fontFamily="shabnamthin" color="#aaa" fontSize=".8rem">
                مدت زمان
            </Typography>

            <Stack direction="row" alignItems="center" gap="2px">
                <Typography fontFamily="shabnam" color="#ddd" fontSize=".95rem">
                    {minute === 0
                        ? "۰۰"
                        : useConvertEnglishNumbersToPersianNumbers(minute)}
                </Typography>

                <Typography color="#666" fontFamily="shabnamthin">
                    :
                </Typography>

                <Typography fontFamily="shabnam" color="#ddd" fontSize=".95rem">
                    {hour === 0
                        ? "۰۰"
                        : useConvertEnglishNumbersToPersianNumbers(hour)}
                </Typography>
            </Stack>
        </Stack>
    );
};

export default Duration;
