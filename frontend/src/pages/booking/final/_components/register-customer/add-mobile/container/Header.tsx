import { Stack, Typography } from "@mui/material";
import useRegisterStore from "../../../../../../../features/customer/register/store";

const Header = () => {
    const setToggle = useRegisterStore((s) => s.setToggle);
    return (
        <Stack
            height="55px"
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            padding="0 20px"
        >
            <Typography color="#eee" fontFamily="shabnam" fontSize="1.2rem">
                آرایشگر
            </Typography>
            <button onClick={() => setToggle("")}>لغو</button>
        </Stack>
    );
};

export default Header;
