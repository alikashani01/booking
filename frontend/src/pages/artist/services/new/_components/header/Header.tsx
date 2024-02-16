import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <div>
                <Link to="/artist/services">
                    <ArrowForwardIosRoundedIcon
                        sx={{ fontSize: "1.3rem", color: "#666" }}
                    />
                    <Typography
                        fontFamily="shabnamthin"
                        color="#eee"
                        fontSize=".8rem"
                    >
                        سرویس‌ها
                    </Typography>
                </Link>
            </div>
            <Typography
                // bgcolor="red"
                paddingBottom="3.5px"
                fontFamily="shabnam"
                color="#eee"
                fontSize="1.1rem"
            >
                جدید
            </Typography>
            <div></div>
        </header>
    );
};

export default Header;
