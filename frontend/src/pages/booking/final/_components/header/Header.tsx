import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <Stack
            component="header"
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            height="40px"
            paddingX="20px"
        >
            <Box flex={1}>
                <Link
                    to="/booking/artists"
                    style={{ justifyContent: "flex-start" }}
                >
                    <ArrowForwardIosRoundedIcon
                        sx={{ fontSize: "1.2rem", color: "#666" }}
                    />
                </Link>
            </Box>

            <Typography
                display="flex"
                justifyContent="center"
                textAlign="center"
                flex={2}
                fontFamily="shabnam"
                color="#eee"
                paddingBottom="3px"
                fontSize=".9rem"
            >
                تاریخ و ثبت نوبت
            </Typography>

            <Box flex={1} />
        </Stack>
    );
};

export default Header;
