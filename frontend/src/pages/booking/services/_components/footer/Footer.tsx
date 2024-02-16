import { Stack, styled } from "@mui/material";
import { Link } from "react-router-dom";
import useBookingStore from "../../../../../features/booking/store/store";
import Price from "./Price";
import styles from "./styles.module.css";

const StyledButton = styled(Link)({
    fontFamily: "shabnam",
    color: "#0288e0",
    background: "#222",
    padding: "9px 18px",
    borderRadius: "8px",
    wordSpacing: "1px",
    fontSize: ".95rem",
});

const Footer = () => {
    const services = useBookingStore((s) => s.services);
    const totalPrice = services.reduce((acc, item) => acc + item.price, 0);
    return (
        <Stack direction="row" gap="10px" className={styles.footer}>
            <Price value={totalPrice} />

            <StyledButton to="/booking/review-and-date">
                ثبت و ادامه
            </StyledButton>
        </Stack>
    );
};

export default Footer;
