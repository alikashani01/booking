import { styled } from "@mui/material";
import { ChangeEvent } from "react";

const StyledInput = styled("input")({
    width: "100%",
    background: "#1d1d1d",
    margin: "0 auto",
    padding: "12px 15px",
    borderRadius: "10px",
    fontSize: "1.3rem",
    fontFamily: "shabnambold",
    paddingTop: "15px",
    letterSpacing: "5px",
    appearance: "textfield",
    textAlign: "center",
    "&::-webkit-inner-spin-button": {
        webkitAppearance: "none",
        margin: 0,
    },
    "&::-webkit-outer-spin-button": {
        webkitAppearance: "none",
        margin: 0,
    },
});

interface Props {
    data: string;
    changeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ data, changeHandler }: Props) => {
    return (
        <StyledInput
            value={data}
            onChange={changeHandler}
            id="mobile"
            type="number"
            minLength={11}
            inputMode="numeric"
        />
    );
};

export default Input;
