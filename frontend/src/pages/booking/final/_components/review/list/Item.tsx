import { ListItem, Stack, Typography, styled } from "@mui/material";
import { Service } from "../../../../../../features/artist/service/entities/Service";
import Duration from "./Duration";
import Price from "./Price";

interface Props {
    service: Service;
}

const Item = ({ service }: Props) => {
    const StyledStack = styled(Stack)({
        width: "100%",
        alignItems: "flex-start",
        flexDirection: "column",
        background: "#1a1a1a",
        transition: ".4s",
        border: `1px solid #1f1f1f`,
        borderRadius: "10px",
        padding: "8px 16px",
    });

    return (
        <ListItem key={service._id} sx={{ padding: 0 }}>
            <StyledStack>
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
            </StyledStack>
        </ListItem>
    );
};

export default Item;
