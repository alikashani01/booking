import { Stack, Typography } from "@mui/material";
import { useConvertEnglishNumbersToPersianNumbers } from "../../../../../../hooks/convertEnglishNumbersToPersianNumbers";

interface Props {
    hour: number | undefined;
    minute: number | undefined;
}

const Duration = ({ hour, minute }: Props) => {
    return (
        <Stack direction="row" gap="6px">
            <Stack direction="row" gap="3px" alignItems="center">
                <Typography color="#ddd" fontFamily="shabnam" fontSize=".9rem">
                    {useConvertEnglishNumbersToPersianNumbers(String(hour))}
                </Typography>
                <Typography
                    color="#777"
                    fontFamily="shabnamthin"
                    fontSize=".75rem"
                >
                    ساعت
                </Typography>
            </Stack>
            <Typography
                color="#777"
                fontFamily="shabnamthin"
                fontSize=".75rem"
                paddingTop="3px"
            >
                :
            </Typography>
            <Stack direction="row" gap="3px" alignItems="center">
                <Typography color="#ddd" fontFamily="shabnam" fontSize=".9rem">
                    {useConvertEnglishNumbersToPersianNumbers(String(minute))}
                </Typography>
                <Typography
                    color="#777"
                    fontFamily="shabnamthin"
                    fontSize=".75rem"
                >
                    دقیقه
                </Typography>
            </Stack>
        </Stack>
    );
};

export default Duration;
