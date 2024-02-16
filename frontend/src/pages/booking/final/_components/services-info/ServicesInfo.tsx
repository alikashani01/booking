import { Stack } from "@mui/material";
import Duration from "./Duration";
import Length from "./Length";

const ServicesInfo = () => {
    return (
        <Stack
            height="35px"
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            position="sticky"
            top={0}
            left={0}
            zIndex={101}
            paddingX="20px"
            bgcolor="#1a1a1a"
        >
            <Length />

            <Duration />
        </Stack>
    );
};

export default ServicesInfo;
