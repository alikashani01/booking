import { Stack, Typography } from "@mui/material";
import TimeStatus from "./time-status/TimeStatus";
import { useParams } from "react-router-dom";

interface Props {
    status: string;
    setStatus: (value: string) => void;
}
const SubHeader = ({ status, setStatus }: Props) => {
    const { dayName } = useParams();
    return (
        <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            gap="5px"
            padding="5px 20px"
        >
            <Typography color="#eee" fontFamily="shabnam" fontSize="1rem">
                {dayName}
            </Typography>
            <TimeStatus status={status} setStatus={setStatus} />
        </Stack>
    );
};

export default SubHeader;
