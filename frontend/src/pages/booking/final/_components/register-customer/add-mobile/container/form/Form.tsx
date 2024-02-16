import {
    Button,
    CircularProgress,
    FormLabel,
    Stack,
    Typography,
    styled,
} from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import useRegister from "../../../../../../../../features/customer/register/hooks/useAddMobile";
import Input from "./Input";
import Notice from "./Notice";
import validate from "./validate";

const StyledForm = styled("form")({
    maxWidth: "300px",
    height: "calc(100% - 55px)",
    margin: "0 auto",
    padding: "0 10px",
});

const Form = () => {
    const [error, setError] = useState<string | null>(null);

    const [data, setData] = useState("");

    const register = useRegister(() => {
        if (data) setData("");
    });

    const { isLoading } = register;

    useEffect(() => {
        setError(validate(data));
    }, [setError, data]);

    const changeHandler = (event: ChangeEvent<HTMLInputElement>) =>
        setData(event.target.value);

    return (
        <StyledForm
            onSubmit={(e) => {
                e.preventDefault();
                if (!error && data) register.mutate(data);
            }}
        >
            <Stack gap="6px" height="100%" justifyContent="center">
                <FormLabel htmlFor="mobile" sx={{ paddingRight: "5px" }}>
                    <Typography
                        fontFamily="shabnamthin"
                        color="#ddd"
                        fontSize=".9rem"
                    >
                        لطفا شماره موبایل خود را وارد کنید
                    </Typography>
                </FormLabel>

                <Input changeHandler={changeHandler} data={data} />

                <Notice error={error} />

                <Button
                    type="submit"
                    sx={{
                        marginTop: "10px",
                        bgcolor: !isLoading ? "#0288e0" : "#333",
                        padding: "10px 20px",
                        borderRadius: "10px",
                        marginX: "auto",
                        gap: "5px",
                    }}
                >
                    {isLoading && <CircularProgress size={16} color="info" />}
                    <Typography
                        fontFamily="shabnam"
                        color={!isLoading ? "#eee" : "#666"}
                        fontSize=".9rem"
                    >
                        دریافت کد تایید
                    </Typography>
                </Button>
            </Stack>
        </StyledForm>
    );
};

export default Form;
