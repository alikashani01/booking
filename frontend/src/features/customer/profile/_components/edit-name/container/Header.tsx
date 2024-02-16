import { Stack, Typography } from "@mui/material";

const Header = () => {
    return (
        <Stack
            height="55px"
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            padding="0 20px"
        >
            <Typography color="#eee" fontFamily="shabnam" fontSize="1.2rem">
                ویرایش نام
            </Typography>
            {/* <button onClick={() => setToggle("", "")}>لغو</button> */}
        </Stack>
    );
};

export default Header;
