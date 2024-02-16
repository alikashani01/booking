import { Button, ListItem } from "@mui/material";
import { ArtistDetails } from "../../../../../features/artist/profile/entities/Artist";
import useBookingStore from "../../../../../features/booking/store/store";

interface Props {
    artist: ArtistDetails;
}

const Item = ({ artist }: Props) => {
    const setArtist = useBookingStore((s) => s.setArtist);

    return (
        <ListItem>
            <Button
                style={{
                    background: "#222",
                    width: "100%",
                    fontSize: "1.3rem",
                }}
                onClick={() => setArtist(artist)}
            >
                {artist.fullName}
            </Button>
        </ListItem>
    );
};

export default Item;
