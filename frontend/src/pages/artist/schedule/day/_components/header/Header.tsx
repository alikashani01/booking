import { Box, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import styles from "./styles.module.css";
import Status from "./Switch";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

const Header = () => {
    const { dayName } = useParams();
    return (
        <header className={styles.header}>
            <Box>
                <Link to="/artist/schedule">
                    <ArrowForwardIosRoundedIcon
                        sx={{ fontSize: "1.3rem", color: "#555" }}
                    />
                </Link>
            </Box>

            <Typography fontFamily="shabnam" color="#eee" fontSize="1.2rem">
                {dayName}
            </Typography>

            <Box>
                <Status />
            </Box>
        </header>
    );
};

export default Header;
