import { Stack } from "@mui/material";
import CalendarContainer from "./calendar/CalendarContainer";
import Times from "./times/Times";

const Date = () => {
    return (
        <Stack width="300px" marginX="auto">
            <CalendarContainer />
            <Times />
        </Stack>
    );
};

export default Date;
