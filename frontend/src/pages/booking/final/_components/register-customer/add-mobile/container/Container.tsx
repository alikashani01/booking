import { Box } from "@mui/material";
import Form from "./form/Form";
import Header from "./Header";

interface Props {
    open: boolean;
}

const Container = ({ open }: Props) => {
    const boxStyles = {
        width: "100%",
        height: "280px",
        position: "absolute",
        bottom: 0,
        left: 0,
        zIndex: 2,
        transform: `translateY(${open ? "0" : "100%"})`,
        transition: ".5s",
        overflowY: "auto",
        background: "#1f1f1f",
        borderTopRightRadius: "18px",
        borderTopLeftRadius: "18px",
        paddingBottom: "10px",
    };
    return (
        <Box sx={boxStyles}>
            <Header />
            <Form />
        </Box>
    );
};

export default Container;
