import { Stack } from "@mui/material";
import Duration from "./Duration";
import Length from "./Length";

const AddedServicesInfo = () => {
    return (
        <Stack
            height="35px"
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            position="sticky"
            top={0}
            left={0}
            zIndex={1}
            paddingX="20px"
        >
            <Length />
            <Duration />
        </Stack>
    );
};

export default AddedServicesInfo;
