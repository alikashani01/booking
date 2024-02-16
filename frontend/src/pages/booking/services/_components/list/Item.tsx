import { Button, ListItem, Stack, Typography, styled } from "@mui/material";
import { Service } from "../../../../../features/artist/service/entities/Service";
import useBookingStore from "../../../../../features/booking/store/store";
import Duration from "./Duration";
import Price from "./Price";

interface Props {
    service: Service;
}

const Item = ({ service }: Props) => {
    const toggleService = useBookingStore((s) => s.toggleService);
    const services = useBookingStore((s) => s.services);
    const selectedItem = services.includes(service);
    const StyledButton = styled(Button)({
        width: "100%",
        alignItems: "flex-start",
        flexDirection: "column",
        background: "#1d1d1d",
        transition: ".4s",
        border: `1px solid ${selectedItem ? "#0288e0" : "#222"}`,
        borderRadius: "10px",
        padding: "8px 16px",
        "&:hover": {
            background: "#191919",
        },
    });
    return (
        <ListItem key={service._id} sx={{ padding: 0 }}>
            <StyledButton onClick={() => toggleService(service)}>
                <Stack
                    alignItems="flex-start"
                    flexGrow={1}
                    gap="2px"
                    paddingBottom="5px"
                >
                    <Typography fontFamily="shabnam" color="#eee">
                        {service.title}
                    </Typography>
                    <Typography
                        fontFamily="shabnamthin"
                        color="#aaa"
                        fontSize=".9rem"
                    >
                        {service.description}
                    </Typography>
                </Stack>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    width="100%"
                    borderTop="1px solid #282828"
                    paddingTop="5px"
                >
                    <Duration
                        hour={service.duration?.hour!}
                        minute={service.duration?.minute!}
                    />
                    <Price value={service.price} />
                </Stack>
            </StyledButton>
        </ListItem>
    );
};

export default Item;
