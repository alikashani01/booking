import { Stack } from "@mui/material";
import useRegisterStore from "../../../../../../../../features/customer/register/store";
import Resend from "./Resend";

const Header = () => {
    const setToggle = useRegisterStore((s) => s.setToggle);
    return (
        <Stack
            height="50px"
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            padding="0 20px"
        >
            <button
                onClick={() => {
                    setToggle("");
                    setToggle("add");
                }}
            >
                لغو یا تغییر شماره
            </button>
            <Resend />
        </Stack>
    );
};

export default Header;
