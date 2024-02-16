import { List, Stack } from "@mui/material";
import useBookingStore from "../../../../../../features/booking/store/store";
import Item from "./Item";

const ListContainer = () => {
    const services = useBookingStore((s) => s.services);
    return (
        <List sx={{ padding: "20px 10px" }}>
            <Stack gap="15px">
                {services?.map((service) => (
                    <Item key={service._id} service={service} />
                ))}
            </Stack>
        </List>
    );
};

export default ListContainer;
