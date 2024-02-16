import {
    Button,
    CircularProgress,
    Stack,
    Typography,
    styled,
} from "@mui/material";
import useSubmitBook from "../../../../../features/booking/hooks/useSubmitBook";
import useBookingStore from "../../../../../features/booking/store/store";
import Price from "./Price";
import styles from "./styles.module.css";

const Footer = () => {
    const services = useBookingStore((s) => s.services);
    const artist = useBookingStore((s) => s.artist);
    const date = useBookingStore((s) => s.date);
    const time = useBookingStore((s) => s.time);

    const totalPrice = services.reduce((acc, item) => acc + item.price, 0);

    const submitBook = useSubmitBook();
    const StyledButton = styled(Button)({
        gap: "5px",
        background: "#222",
        borderRadius: "8px",
        padding: "9px 18px",
        color: submitBook.isLoading ? "#666 !important" : "#00d166",
        fontFamily: "shabnam",
        fontSize: ".95rem",
        wordSpacing: "1px",
    });
    return (
        <Stack direction="row" gap="10px" className={styles.footer}>
            <Price value={totalPrice} />

            <StyledButton
                onClick={() =>
                    submitBook.mutate({
                        services,
                        artist: artist._id!,
                        date,
                        time: time!,
                    })
                }
                disabled={submitBook.isLoading && true}
            >
                {submitBook.isLoading && (
                    <CircularProgress size={17} sx={{ color: "#555" }} />
                )}
                <Typography fontFamily="shabnam">ثبت نهایی</Typography>
            </StyledButton>
        </Stack>
    );
};

export default Footer;
