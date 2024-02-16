import { Stack, Typography } from "@mui/material";
import { useState } from "react";
import EditTimes from "../edit-times/EditTimes";

const SubHeader = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Stack
                direction="row"
                gap="10px"
                alignItems="center"
                justifyContent="space-between"
                padding="5px 20px"
            >
                <Typography fontFamily="shabnam" color="#ddd">
                    ساعات کاری
                </Typography>
                <button
                    style={{
                        fontSize: ".9rem",
                    }}
                    onClick={() => setOpen(true)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        className="bi bi-plus"
                        viewBox="0 0 16 16"
                    >
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                </button>
            </Stack>
            <EditTimes open={open} setOpen={setOpen} />
        </>
    );
};

export default SubHeader;
