import { Button, Stack, Typography, styled } from "@mui/material";
import useAddName from "../../../../hooks/useAddName";

const StyledForm = styled("form")({
    maxWidth: "300px",
    height: "calc(100% - 55px)",
    margin: "0 auto",
    padding: "0 10px",
});

const Form = () => {
    const editName = useAddName();
    const data = {
        fullName: "eli ka",
    };
    return (
        <StyledForm
            onSubmit={(e) => {
                e.preventDefault();
                editName.mutate(data);
            }}
        >
            <Stack gap="6px" height="100%" justifyContent="center">
                <Button
                    type="submit"
                    sx={{
                        marginTop: "10px",
                        // bgcolor: !isLoading ? "#0288e0" : "#333",
                        padding: "10px 20px",
                        borderRadius: "10px",
                        marginX: "auto",
                        gap: "5px",
                    }}
                >
                    {/* {isLoading && <CircularProgress size={16} color="info" />} */}
                    <Typography
                        fontFamily="shabnam"
                        // color={!isLoading ? "#eee" : "#666"}
                        fontSize=".9rem"
                    >
                        ذخیره کن
                    </Typography>
                </Button>
            </Stack>
        </StyledForm>
    );
};

export default Form;
