import { Stack } from "@mui/material";
import Artist from "./artist/Artist";
import Customer from "./customer/Customer";

const Users = () => {
    return (
        <Stack gap="5px" mt={10}>
            <Artist />
            <Customer />
        </Stack>
    );
};

export default Users;
