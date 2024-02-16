import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Footer = () => {
    return (
        <Stack direction="row" gap="10px" className={styles.footer}>
            <Link to="/customer">حساب کاربری</Link>
            <Link to="/booking/artists">رزرو نوبت جدید</Link>
        </Stack>
    );
};

export default Footer;
