import { Typography } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Switch, { SwitchProps } from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import { useState } from "react";

const IOSSwitch = styled((props: SwitchProps) => (
    <Switch
        focusVisibleClassName=".Mui-focusVisible"
        disableRipple
        {...props}
    />
))(({ theme }) => ({
    width: 50,
    height: 26,
    padding: 0,
    "& .MuiSwitch-switchBase": {
        dir: "ltr",
        padding: 0,
        margin: 2,
        transitionDuration: "300ms",
        "&.Mui-checked": {
            transform: "translateX(24px)",
            color: "#fff",
            "& + .MuiSwitch-track": {
                backgroundColor:
                    theme.palette.mode === "dark" ? "#2ECA45" : "#00d166",
                opacity: 1,
                border: 0,
            },
            "&.Mui-disabled + .MuiSwitch-track": {
                opacity: 0.5,
            },
        },
        "&.Mui-focusVisible .MuiSwitch-thumb": {
            color: "#33cf4d",
            border: "6px solid #fff",
        },
        "&.Mui-disabled .MuiSwitch-thumb": {
            color:
                theme.palette.mode === "light"
                    ? theme.palette.grey[100]
                    : theme.palette.grey[600],
        },
        "&.Mui-disabled + .MuiSwitch-track": {
            opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
        },
    },
    "& .MuiSwitch-thumb": {
        boxSizing: "border-box",
        width: 22,
        height: 22,
    },
    "& .MuiSwitch-track": {
        borderRadius: 26 / 2,
        backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
        opacity: 1,
        transition: theme.transitions.create(["background-color"], {
            duration: 500,
        }),
    },
}));

export default function Featured() {
    const [discounts, setDiscounts] = useState(false);
    return (
        <FormGroup
            sx={{
                padding: "15px",
            }}
        >
            <FormControlLabel
                dir="ltr"
                control={<IOSSwitch checked={discounts ? true : false} />}
                label={
                    <Typography
                        variant="body1"
                        style={{ fontFamily: "shabnamthin" }}
                    >
                        تخفیف خورده
                    </Typography>
                }
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: 0,
                    fontFamily: "shabnamthin !important",
                }}
                onClick={() => setDiscounts(true)}
            />
        </FormGroup>
    );
}
