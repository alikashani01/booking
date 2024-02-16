import { Avatar, Box } from "@mui/material";

interface Props {
    open: boolean;
}

const Container = ({ open }: Props) => {
    const boxStyles = {
        width: "250px",
        height: "250px",
        position: "absolute",
        top: "50%",
        left: "50%",
        zIndex: 2,
        transform: `translate(-50%, ${open ? "-50%" : "100%"})`,
        transition: ".5s",
        overflowY: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    };
    return (
        <Box sx={boxStyles}>
            <Avatar
                src=""
                alt=""
                sx={{
                    width: "200px",
                    height: "200px",
                    background: "#1d1d1d",
                    color: "#222",
                }}
            />
        </Box>
    );
};

export default Container;
