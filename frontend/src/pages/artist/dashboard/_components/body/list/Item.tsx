import { ListItem, Stack, Typography } from "@mui/material";
import { Book } from "../../../../../../features/book/Entities";
import { convertEnglishNumbersToPersianNumbers } from "../../../../../../hooks/convertEnglishNumbersToPersianNumbers";

interface Props {
    book: Book;
}

const Item = ({ book }: Props) => {
    return (
        <ListItem
            key={book._id}
            sx={{
                borderBottom: "1px solid #222",
                display: "flex",
                alignItem: "center",
                justifyContent: "space-between",
            }}
        >
            <Stack alignItems="flex-start">
                <Typography
                    fontSize=".85rem"
                    fontFamily="shabnamthin"
                    color="#999"
                >
                    شناسه
                </Typography>
                <Typography fontFamily="shabnam" color="#eee" letterSpacing={5}>
                    {convertEnglishNumbersToPersianNumbers(book.code)}
                </Typography>
            </Stack>
            <Stack alignItems="flex-start">
                <Typography
                    fontSize=".85rem"
                    fontFamily="shabnamthin"
                    color="#999"
                >
                    تاریخ نوبت
                </Typography>
                <Typography
                    fontSize=".9rem"
                    fontFamily="shabnam"
                    color="#eee"
                    letterSpacing={2}
                >
                    {book.time} - {book.date}
                </Typography>
            </Stack>
        </ListItem>
    );
};

export default Item;
