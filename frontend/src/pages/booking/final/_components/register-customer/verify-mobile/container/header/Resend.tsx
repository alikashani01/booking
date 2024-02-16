import { Stack, Typography } from "@mui/material";

const Resend = () => {
    return (
        <Stack direction="row" alignItems="center" gap="5px">
            <button>
                <Typography
                    color="#eee"
                    fontFamily="shabnamthin"
                    fontSize=".9rem"
                >
                    ارسال مجدد
                </Typography>
            </button>
        </Stack>
    );
};

export default Resend;
