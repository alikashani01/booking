import { styled } from "@mui/material";
import { Stack } from "@mui/system";
import { useEffect, useRef, useState } from "react";
import useVerifyRegister from "../../../../../../../features/customer/register/hooks/useVerifyMobile";
import useRegisterStore from "../../../../../../../features/customer/register/store";

const StyledInput = styled("input")({
    width: " 65px",
    height: " 70px",
    flexGrow: "1",
    textAlign: "center",
    fontSize: "1.6rem",
    fontFamily: "sfprodisplayblack",
    display: " block",
    backgroundColor: "#222",
    border: " 1px solid #333",
    color: " #eee",
    padding: " 12px",
    borderRadius: "10px",
    appearance: "textfield",
    "&::-webkit-inner-spin-button": {
        webkitAppearance: "none",
        margin: 0,
    },
    "&::-webkit-outer-spin-button": {
        webkitAppearance: "none",
        margin: 0,
    },
});
const Input = () => {
    const inputRefs = useRef<HTMLInputElement[]>([null!, null!, null!, null!]);

    const [verificationCode, setVerificationCode] = useState(["", "", "", ""]);

    const createdCustomer = useRegisterStore((s) => s.createdCustomer);

    const verify = useVerifyRegister(() => {
        if (verificationCode) setVerificationCode(["", "", "", ""]);
    });

    useEffect(() => {
        const updated =
            verificationCode[0] !== "" &&
            verificationCode[1] !== "" &&
            verificationCode[2] !== "" &&
            verificationCode[3] !== "";

        if (updated) {
            console.log(createdCustomer);

            verify.mutate({ mobile: createdCustomer, verificationCode });
        }
    }, [verificationCode]);

    const handleChange = (index: number, value: string) => {
        const updatedCode = [...verificationCode];
        updatedCode[index] = value;
        setVerificationCode(updatedCode);

        const updatedVerificationCode = [...updatedCode];

        if (index < 3 && value !== "") {
            inputRefs.current[index + 1].focus();
        } else if (index === 3 && value !== "") {
            verify.mutate({
                mobile: createdCustomer,
                verificationCode: updatedVerificationCode,
            });
        }
    };

    const handlePaste = async (
        event: React.ClipboardEvent<HTMLInputElement>
    ) => {
        event.preventDefault();

        const pastedData = event.clipboardData.getData("text/plain");

        const updatedCode = [...verificationCode];

        for (let i = 0; i < pastedData.length && i < 4; i++) {
            updatedCode[i] = pastedData[i];
        }

        const updatedVerificationCode = [...updatedCode];

        setVerificationCode(updatedVerificationCode);

        inputRefs.current[0].focus();
    };

    const handleKeyDown = (
        index: number,
        event: React.KeyboardEvent<HTMLInputElement>
    ) => {
        if (
            event.key === "Backspace" &&
            index > 0 &&
            verificationCode[index] === ""
        ) {
            inputRefs.current[index - 1].focus();
        }
    };

    return (
        <form
            style={{
                height: "calc(100% - 50px)",
                direction: "ltr",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                paddingBottom: "30px",
                width: "100%",
            }}
        >
            <Stack direction="row" gap="10px">
                {verificationCode.map((code, index) => (
                    <StyledInput
                        key={index}
                        ref={(ref) => ref && (inputRefs.current[index] = ref)}
                        value={code}
                        type="number"
                        inputMode="numeric"
                        maxLength={1}
                        onChange={(event) =>
                            handleChange(index, event.target.value)
                        }
                        onPaste={(event) => handlePaste(event)}
                        onKeyDown={(event) => handleKeyDown(index, event)}
                    />
                ))}
            </Stack>
        </form>
    );
};

export default Input;
