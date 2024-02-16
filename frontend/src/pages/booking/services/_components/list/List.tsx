import { List, Stack } from "@mui/material";
import useGetServices from "../../../../../features/booking/hooks/useGetServices";
import useBookingStore from "../../../../../features/booking/store/store";
import Item from "./Item";

const ListContainer = () => {
    const artist = useBookingStore((s) => s.artist);
    const { data: services } = useGetServices(artist._id!);
    return (
        <List sx={{ padding: "5px 15px", paddingBottom: "100px" }}>
            <Stack gap="15px">
                {services?.map((service) => (
                    <Item key={service._id} service={service} />
                ))}
            </Stack>
        </List>
    );
};

export default ListContainer;
