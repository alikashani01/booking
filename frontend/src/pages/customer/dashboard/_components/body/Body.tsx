import { Box, CircularProgress, Typography } from "@mui/material";
import useGetBooks from "../../../../../features/book/hooks/useGetList";
import ListContainer from "./list/List";

const Body = () => {
    const { isLoading, error, data } = useGetBooks("customer");
    return (
        <Box>
            {isLoading ? (
                <CircularProgress size={18} sx={{ color: "#777" }} />
            ) : error ? (
                <Typography>{error.message}</Typography>
            ) : (
                <ListContainer books={data} />
            )}
        </Box>
    );
};

export default Body;
