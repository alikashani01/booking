import { Button, List, ListItem, Typography } from "@mui/material";

const times = [
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
];
const Body = () => {
    return (
        <List
            sx={{
                display: "flex",
                direction: "row",
                flexWrap: "wrap",
                gap: "5px",
                padding: "10px 20px",
            }}
        >
            {times.map((time) => (
                <ListItem
                    key={time}
                    sx={{
                        width: "calc(50% - 20px)",
                        height: "100%",
                        flexGrow: 1,

                        padding: 0,
                    }}
                >
                    <Button
                        sx={{
                            width: "100%",
                            height: "100%",
                            bgcolor: "#222",
                            borderRadius: "12px",
                            padding: "10px",
                        }}
                    >
                        <Typography
                            color="#eee"
                            fontFamily="shabnam"
                            fontSize="1.4rem"
                        >
                            {Number(time).toLocaleString("fa")}
                        </Typography>
                    </Button>
                </ListItem>
            ))}
        </List>
    );
};

export default Body;
