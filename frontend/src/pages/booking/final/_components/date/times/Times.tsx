import EditIcon from "@mui/icons-material/Edit";
import { Box, Stack, Typography } from "@mui/material";
import { useState } from "react";
import useBookingStore from "../../../../../../features/booking/store/store";
import { convertEnglishNumbersToPersianNumbers } from "../../../../../../hooks/convertEnglishNumbersToPersianNumbers";
import Container from "./container/Container";
import styles from "./styles.module.css";

const Times = () => {
    const [editTime, setEditTime] = useState(false);
    const date = useBookingStore((s) => s.date);
    const time = useBookingStore((s) => s.time);
    return (
        date?.toString() && (
            <div className={styles.container}>
                {!editTime ? (
                    <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                        padding="15px 20px"
                        paddingLeft="23px"
                    >
                        <Stack direction="row" alignItems="center" gap="5px">
                            <Typography
                                fontFamily="shabnamthin"
                                color="#888"
                                fontSize=".95rem"
                                paddingTop="3px"
                            >
                                ساعت
                            </Typography>
                            <Typography
                                fontFamily="shabnam"
                                color="#eee"
                                fontSize="1.2rem"
                                letterSpacing={4}
                                paddingTop="3px"
                            >
                                {convertEnglishNumbersToPersianNumbers(time!)}
                            </Typography>
                        </Stack>
                        <button
                            style={{
                                padding: 0,
                                maxWidth: "150px",
                                fontSize: ".9rem",
                            }}
                            onClick={() => setEditTime(true)}
                        >
                            <EditIcon
                                sx={{ fontSize: "1.2rem", color: "#0288e0" }}
                            />
                        </button>
                    </Stack>
                ) : (
                    <Box padding="0 20px">
                        <Typography
                            color="#ddd"
                            fontFamily="shabnam"
                            fontSize=".9rem"
                            paddingRight="5px"
                            sx={{ wordSpacing: 1 }}
                        >
                            لطفا ساعت نوبت را انتخاب کنید
                        </Typography>
                        <Container setEditTime={setEditTime} />
                    </Box>
                )}
            </div>
        )
    );
};

export default Times;
