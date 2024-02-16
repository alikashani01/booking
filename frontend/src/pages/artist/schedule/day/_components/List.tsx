import { List, ListItem, Typography } from "@mui/material";

const times = [6, 7, 8, 9, 12];
const Times = () => {
    return (
        <List
            sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                padding: "10px 20px",
                paddingBottom: "100px",
            }}
        >
            {times.map((time) => (
                <>
                    <ListItem
                        sx={{
                            width: "calc(50% - 10px)",
                            flexGrow: 1,

                            padding: "10px",
                            paddingTop: "12px",
                            borderBottom: "1px solid #1d1d1d",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                        key={time}
                    >
                        <Typography
                            letterSpacing={3}
                            color="#eee"
                            fontSize="1.4rem"
                            fontFamily="shabnam"
                        >
                            {time.toLocaleString("fa")}:۳۰
                        </Typography>
                    </ListItem>
                    <ListItem
                        sx={{
                            width: "calc(50% - 10px)",
                            flexGrow: 1,
                            // border: "1px solid #333",
                            // borderRadius: "10px",
                            padding: "10px",
                            paddingTop: "12px",
                            borderBottom: "1px solid #1d1d1d",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                        key={time}
                    >
                        <Typography
                            letterSpacing={3}
                            color="#eee"
                            fontSize="1.4rem"
                            fontFamily="shabnam"
                        >
                            {time.toLocaleString("fa")}
                        </Typography>
                    </ListItem>
                </>
            ))}
        </List>
    );
};

export default Times;
