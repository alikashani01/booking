import { Button, CircularProgress, Typography, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useRegisterStore from "../../../../../../features/artist/register/store";
import useRegister from "../../../../../../features/artist/register/useRegister";
import styles from "./styles.module.css";

const StyledButton = styled(Button)({
    width: "250px",
    color: "#fff",
    borderRadius: "20px",
    padding: "22px",
    margin: "0 auto",
});

const Artist = () => {
    const navigate = useNavigate();

    const artistInfo = useRegisterStore((s) => s.artistInfo);

    const [data, setData] = useState("");
    const [show, setShow] = useState(false);

    const register = useRegister();

    useEffect(() => {
        register.isSuccess && navigate("/artist");
    }, [register.isSuccess, navigate]);

    const handleRegister = () => {
        if (artistInfo.token) {
            navigate("/artist");
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
                    آرایشگر
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
                    <label>نام کاربری - آرایشگر</label>
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

export default Artist;
