import { Stack, Typography } from "@mui/material";

interface Props {
    value: number;
}
const Price = ({ value = 5600000 }: Props) => {
    return (
        <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            gap="4px"
        >
            <Typography fontFamily="shabnamthin" fontSize="1rem" color="#888">
                {value.toLocaleString("fa")}
            </Typography>

            <Typography fontSize=".7rem" color="#666" fontFamily="shabnamthin">
                تومان
            </Typography>
        </Stack>
    );
};

export default Price;
