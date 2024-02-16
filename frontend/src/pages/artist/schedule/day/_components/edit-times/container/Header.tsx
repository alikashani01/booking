import { Stack, Typography } from "@mui/material";

interface Props {
    setOpen: (value: boolean) => void;
}

const Header = ({ setOpen }: Props) => {
    return (
        <Stack
            height="45px"
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            padding="0 20px"
            position="sticky"
            top={0}
            left={0}
            zIndex={1}
            bgcolor="#1f1f1f"
        >
            <Typography color="#eee" fontFamily="shabnam" fontSize="1rem">
                ویرایش ساعات کاری
            </Typography>

            <button onClick={() => setOpen(false)}>لغو</button>
        </Stack>
    );
};

export default Header;
