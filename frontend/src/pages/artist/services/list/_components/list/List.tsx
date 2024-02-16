import { List, Stack } from "@mui/material";
import useArtistServiceStore from "../../../../../../features/artist/service/store";
import Item from "./Item";

interface Props {
    skill: string;
    edit: boolean;
}

const ListContainer = ({ skill, edit }: Props) => {
    const services = useArtistServiceStore((s) => s.services);
    return (
        <List sx={{ padding: "15px", paddingBottom: "100px" }}>
            <Stack gap="15px">
                {services.map((service) =>
                    skill === "همه" ? (
                        <Item service={service} edit={edit} />
                    ) : (
                        service.skill === skill && (
                            <Item service={service} edit={edit} />
                        )
                    )
                )}
            </Stack>
        </List>
    );
};

export default ListContainer;
