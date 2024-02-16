import { CircularProgress, List } from "@mui/material";
import useGetArtists from "../../../../../features/booking/hooks/useGetArtists";
import Item from "./Item";

const Artists = () => {
    const { isLoading, data } = useGetArtists();

    return (
        <List>
            {isLoading ? (
                <CircularProgress />
            ) : (
                data?.map((artist) => <Item key={artist._id} artist={artist} />)
            )}
        </List>
    );
};

export default Artists;
