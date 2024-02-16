import { Button, CircularProgress, Typography, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useRegisterStore from "../../../../../../features/customer/register/store";
import useRegister from "../../../../../../features/customer/register/useRegister";
import styles from "./styles.module.css";

const StyledButton = styled(Button)({
    width: "250px",
    color: "#fff",
    borderRadius: "20px",
    padding: "22px",
    margin: "0 auto",
});

const Customer = () => {
    const navigate = useNavigate();

    const customerInfo = useRegisterStore((s) => s.customerInfo);

    const [data, setData] = useState("");
    const [show, setShow] = useState(false);

    const register = useRegister();

    useEffect(() => {
        register.isSuccess && navigate("/artist");
    }, [register.isSuccess, navigate]);

    const handleRegister = () => {
        if (customerInfo.token) {
            navigate("/customer");
        } else {
            setShow(!show);
        }
    };
    return (
        <>
            <StyledButton id={styles.btn} onClick={handleRegister}>
                <Typography
                    fontSize="1.2rem"
                    fontFamily="shabnam"
                    color="orange"
                >
                    مشتری
                </Typography>
            </StyledButton>
            {show && (
                <form
                    style={{ width: "300px", margin: "20px auto" }}
                    onSubmit={(e) => {
                        e.preventDefault();
                        register.mutate(data);
                    }}
                >
                    <label>نام کاربری - مشتری</label>
                    <input
                        style={{
                            display: "block",
                            width: "100%",
                            background: "#333",
                            border: "1px solid #444",
                            padding: "10px",
                            color: "#eee",
                        }}
                        value={data}
                        onChange={(e) => setData(e.target.value)}
                    />
                    <button style={{ marginTop: "10px" }}>
                        {register.isLoading && <CircularProgress size={15} />}
                        ورود | ثبت نام
                    </button>
                </form>
            )}
        </>
    );
};

export default Customer;
