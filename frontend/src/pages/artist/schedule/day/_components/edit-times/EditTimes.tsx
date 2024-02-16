import { Backdrop, Box } from "@mui/material";
import Container from "./container/Container";

interface Props {
    open: boolean;
    setOpen: (value: boolean) => void;
}

const EditTimes = ({ open, setOpen }: Props) => {
    const boxStyles = {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
    };
    return (
        <Backdrop
            open={open}
            sx={{
                backdropFilter: "blur(5px)",
                bgcolor: "#15151555",
                zIndex: (theme) => theme.zIndex.drawer + 1,
            }}
        >
            <Box sx={boxStyles} onClick={() => setOpen(false)} />

            <Container open={open} setOpen={setOpen} />
        </Backdrop>
    );
};

export default EditTimes;
