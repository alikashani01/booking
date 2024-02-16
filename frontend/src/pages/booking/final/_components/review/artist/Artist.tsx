import { Avatar, List, Stack, Typography } from "@mui/material";
import useBookingStore from "../../../../../../features/booking/store/store";

const Artist = () => {
    const artist = useBookingStore((s) => s.artist);
    return (
        <List sx={{ padding: "0 10px" }}>
            <Stack
                direction="row"
                alignItems="center"
                gap="10px"
                sx={{
                    bgcolor: "#1a1a1a",
                    padding: "15px 20px",
                    borderRadius: "10px",
                }}
            >
                <Typography
                    color="#888"
                    fontSize=".95rem"
                    fontFamily="shabnamthin"
                >
                    آرایشگر
                </Typography>
                <Stack direction="row" alignItems="center" gap="10px">
                    <Avatar src={artist.photo} />
                    <Typography
                        color="#eee"
                        fontSize="1.1rem"
                        fontFamily="shabnam"
                    >
                        {artist.fullName}
                    </Typography>
                </Stack>
            </Stack>
        </List>
    );
};

export default Artist;
