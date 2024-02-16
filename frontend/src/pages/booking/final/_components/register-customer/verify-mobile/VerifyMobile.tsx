import { Backdrop, Box } from "@mui/material";
import useRegisterStore from "../../../../../../features/customer/register/store";
import Container from "./container/Container";

const VerifyMobile = () => {
    const boxStyles = {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
    };

    const toggle = useRegisterStore((s) => s.toggle);

    const setToggle = useRegisterStore((s) => s.setToggle);

    const open = toggle === "verify" ? true : false;
    return (
        <Backdrop
            open={open}
            sx={{
                backdropFilter: "blur(5px)",
                bgcolor: "#15151555",
                zIndex: (theme) => theme.zIndex.drawer + 1,
            }}
        >
            <Box sx={boxStyles} onClick={() => setToggle("")} />

            <Container open={open} />
        </Backdrop>
    );
};

export default VerifyMobile;
