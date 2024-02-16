import { Stack, Typography } from "@mui/material";
import useGetDetails from "../../../../../features/artist/profile/hooks/useGetDetails";
import MenuContainer from "./menu-container/MenuContainer";
import Photo from "./photo/Photo";

const Header = () => {
    const { data: artist } = useGetDetails();
    return (
        <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            bgcolor="#1a1a1a"
            borderRadius="10px"
            padding="10px 15px"
        >
            <Stack direction="row" gap="10px" alignItems="center">
                <Photo />
                <Stack>
                    <Typography
                        fontFamily="shabnam"
                        color="#888"
                        fontSize=".9rem"
                    >
                        {artist?.fullName}
                    </Typography>
                    <Typography
                        fontFamily="shabnamthin"
                        color="#888"
                        fontSize=".85rem"
                        letterSpacing={1}
                        marginTop="-3px"
                    >
                        آرایشگر
                    </Typography>
                </Stack>
            </Stack>
            <MenuContainer />
        </Stack>
    );
};

export default Header;
