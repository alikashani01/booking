import { Stack, Typography } from "@mui/material";

interface Props {
    error: string | null;
}
const Notice = ({ error }: Props) => {
    return (
        <Stack
            direction="row"
            gap="3px"
            color={error ? "#ff6666" : "#aaa"}
            paddingRight="5px"
        >
            <Typography fontFamily="shabnamthin" fontSize=".8rem">
                مثال:
            </Typography>
            <Typography
                fontFamily="shabnamthin"
                fontSize=".8rem"
                letterSpacing={2}
            >
                ۰۹۱۲۲۱۱۱۲۲۲
            </Typography>
        </Stack>
    );
};

export default Notice;
