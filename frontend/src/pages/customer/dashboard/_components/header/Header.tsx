import { Stack, Typography } from "@mui/material";
import useCustomerProfileStore from "../../../../../features/customer/profile/store";
import MenuContainer from "./menu-container/MenuContainer";

const Header = () => {
    const customerDetails = useCustomerProfileStore((s) => s.customerDetails);
    return (
        <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            bgcolor="#1a1a1a"
            borderRadius="10px"
            padding="10px 15px"
        >
            <Stack direction="row" gap="10px" alignItems="center">
                <Stack>
                    <Typography
                        fontFamily="shabnam"
                        color="#888"
                        fontSize=".9rem"
                    >
                        {customerDetails.fullName}
                    </Typography>
                    <Typography
                        fontFamily="shabnamthin"
                        color="#888"
                        fontSize=".85rem"
                        letterSpacing={1}
                        marginTop="-3px"
                    >
                        مشتری
                    </Typography>
                </Stack>
            </Stack>
            <MenuContainer />
        </Stack>
    );
};

export default Header;
