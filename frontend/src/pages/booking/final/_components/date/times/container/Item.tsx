import { Button, ListItem, Typography, styled } from "@mui/material";
import useBookingStore from "../../../../../../../features/booking/store/store";

const StyledButton = styled(Button)({
    width: "100%",
    background: "#222",
    border: "1px solid #333",
    borderRadius: "10px",
    paddingTop: "10px",
});

interface Props {
    time: number;
    index: number;
    setEditTime: (value: boolean) => void;
}

const Item = ({ time, index, setEditTime }: Props) => {
    const setTime = useBookingStore((s) => s.setTime);
    return (
        <>
            <ListItem
                sx={{
                    width: "calc(50% - 10px)",
                    padding: 0,
                    flexGrow: 1,
                }}
                key={index}
            >
                <StyledButton
                    onClick={() => {
                        setTime(time);
                        setEditTime(false);
                    }}
                >
                    <Typography
                        letterSpacing={3}
                        color="#eee"
                        fontSize="1.4rem"
                        fontFamily="shabnam"
                    >
                        {Number(time).toLocaleString("fa")}
                    </Typography>
                </StyledButton>
            </ListItem>
            <ListItem
                sx={{
                    width: "calc(50% - 10px)",
                    padding: 0,
                    flexGrow: 1,
                }}
                key={time}
            >
                <StyledButton
                    onClick={() => {
                        setTime(time);
                        setEditTime(false);
                    }}
                >
                    <Typography
                        letterSpacing={3}
                        color="#eee"
                        fontSize="1.4rem"
                        fontFamily="shabnam"
                    >
                        {Number(time).toLocaleString("fa")}:۳۰
                    </Typography>
                </StyledButton>
            </ListItem>
        </>
    );
};

export default Item;
