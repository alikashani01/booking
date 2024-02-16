import { List } from "@mui/material";
import { Book } from "../../../../../../features/book/Entities";
import Item from "./Item";

interface Props {
    books: Book[];
}

const ListContainer = ({ books }: Props) => {
    return (
        <List>
            {books.map((book) => (
                <Item book={book} />
            ))}
        </List>
    );
};

export default ListContainer;
