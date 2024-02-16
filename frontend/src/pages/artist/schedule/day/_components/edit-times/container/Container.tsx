import { Box } from "@mui/material";
import { useState } from "react";
import Header from "./Header";
import Body from "./body/Body";
import SubHeader from "./sub-header/SubHeader";

interface Props {
    open: boolean;
    setOpen: (value: boolean) => void;
}

const Container = ({ open, setOpen }: Props) => {
    const [status, setStatus] = useState("صبح");
    const boxStyles = {
        width: "100%",
        height: "350px",
        maxHeight: "90vh",
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
            <Header setOpen={setOpen} />
            <SubHeader status={status} setStatus={setStatus} />
            <Body />
        </Box>
    );
};

export default Container;
