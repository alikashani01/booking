import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import { List, ListItem, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const days = [
    {
        name: "شنبه",
        status: "تعطیل",
        times: [],
    },
    {
        name: "یک‌شنبه",
        status: "فعال",
        times: [],
    },
    {
        name: "دوشنبه",
        status: "فعال",
        times: [],
    },
    {
        name: "سه‌شنبه",
        status: "فعال",
        times: [],
    },
    {
        name: "چهارشنبه",
        status: "فعال",
        times: [],
    },
    {
        name: "پنج‌شنبه",
        status: "فعال",
        times: [],
    },
    {
        name: "جمعه",
        status: "تعطیل",
        times: [],
    },
];

const Days = () => {
    return (
        <List
            sx={{
                padding: "10px 20px",
                paddingBottom: "100px",
            }}
        >
            {days.map((day) => (
                <ListItem key={day.name} sx={{ padding: 0 }}>
                    <Link
                        to={`day/${day.name}`}
                        style={{
                            background: "#1a1a1a",
                            borderRadius: "10px",
                            width: "100%",
                            justifyContent: "space-between",
                            padding: "15px 20px",
                            margin: "5px 0",
                        }}
                    >
                        <Typography fontFamily="shabnam" color="#eee">
                            {day.name}
                        </Typography>
                        <Stack direction="row" gap="10px" alignItems="center">
                            <Typography
                                fontFamily="shabnam"
                                color="#aaa"
                                fontSize=".85rem"
                            >
                                {day.status}
                            </Typography>
                            <ArrowBackIosRoundedIcon
                                sx={{ fontSize: "1rem", color: "#888888" }}
                            />
                        </Stack>
                    </Link>
                </ListItem>
            ))}
        </List>
    );
};

export default Days;
