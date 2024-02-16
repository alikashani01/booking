import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { Stack } from "@mui/material";
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
            <Link to="/">
                <ArrowForwardIosRoundedIcon
                    sx={{ fontSize: "1.2rem", color: "#666" }}
                />
            </Link>
            <span>انتخاب ارایشگر</span>
        </Stack>
    );
};

export default Header;
