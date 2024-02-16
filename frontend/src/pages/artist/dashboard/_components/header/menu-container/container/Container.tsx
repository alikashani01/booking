import { Box } from "@mui/material";

const Container = () => {
    const logout = () => {
        localStorage.removeItem("artistInfo");
        document.location.pathname = "/";
    };
    return (
        <Box>
            <button onClick={logout}>خروج</button>
        </Box>
    );
};

export default Container;
