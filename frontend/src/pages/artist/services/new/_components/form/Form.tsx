import { Button, Stack, Typography, styled } from "@mui/material";
import { FormEvent, useState } from "react";
import useAddService from "../../../../../../features/artist/service/hooks/useAddService";
import styles from "./styles.module.css";

const StyledButton = styled(Button)({
    position: "relative",
    zIndex: 1,
    background: "#0288e0",
    color: "#fff",
    fontFamily: "shabnam",
    padding: "6px 18px",
    borderRadius: "10px",
    fontSize: "1rem",
});
const Form = () => {
    const [data, setData] = useState({
        skill: "",
        title: "",
        description: "",
        price: 0,
        hour: 0,
        minute: 0,
    });

    const changeHandler = (event: FormEvent) => {
        const target = event.target as HTMLInputElement;
        setData({
            ...data,
            [target.name]: target.value,
        });
    };

    const addService = useAddService();

    return (
        <form
            className={styles.form}
            onSubmit={(e) => {
                e.preventDefault();
                addService.mutate(data);
            }}
        >
            <div className="mb-3">
                <label htmlFor="skill" className="form-label">
                    دسته‌بندی
                </label>
                <select
                    value={data.skill}
                    name="skill"
                    onChange={changeHandler}
                    id="skill"
                >
                    <option value="">لطفا یک دسته‌(مهارت) انتخاب کنید</option>
                    <option value="میکاپ">میکاپ</option>
                    <option value="مو">مو</option>
                    <option value="ناخن">ناخن</option>
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">
                    عنوان
                </label>
                <input
                    name="title"
                    type="text"
                    id="title"
                    value={data.title}
                    onChange={changeHandler}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">
                    توضیحات
                </label>
                <textarea
                    name="description"
                    id="description"
                    value={data.description}
                    onChange={changeHandler}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="price" className="form-label">
                    هزینه
                </label>
                <input
                    name="price"
                    id="price"
                    type="number"
                    value={data.price}
                    onChange={changeHandler}
                />
            </div>
            <div className="mb-3">
                <Typography fontFamily="shabnam" fontSize="1.1rem" color="#aaa">
                    مدت زمان
                </Typography>
                <Stack
                    direction="row"
                    gap="10px"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <div className={styles.duration}>
                        <label id="hour" className="form-label">
                            دقیقه
                        </label>
                        <select
                            name="minute"
                            id="minute"
                            value={data.minute}
                            onChange={changeHandler}
                        >
                            <option value={0} selected>
                                ۰۰
                            </option>
                            <option value={15}>۱۵</option>
                            <option value={30}>۳۰</option>
                            <option value={45}>۴۵</option>
                        </select>
                    </div>
                    <div className={styles.duration}>
                        <label id="hour" className="form-label">
                            ساعت
                        </label>
                        <select
                            name="hour"
                            id="hour"
                            value={data.hour}
                            onChange={changeHandler}
                        >
                            <option value={0} selected>
                                ۰۰
                            </option>
                            <option value={1}>۱</option>
                            <option value={2}>۲</option>
                            <option value={3}>۳</option>
                            <option value={4}>۴</option>
                        </select>
                    </div>
                </Stack>
            </div>
            <div className={styles.footer}>
                <StyledButton type="submit">ثبت کنید</StyledButton>
            </div>
        </form>
    );
};

export default Form;
