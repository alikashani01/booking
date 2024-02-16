import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Stack, Typography, styled } from "@mui/material";
import { useForm } from "react-hook-form";
import { z } from "zod";
import styles from "./styles.module.css";

const schema = z.object({
    category: z.string(),
    title: z.string().min(1, { message: "حداقل ۴ کاراکتر" }),
    description: z.string().min(1, { message: "حداقل ۲۰ کاراکتر" }),
    price: z.number().refine((data) => data >= 0, {
        message: "لطفا هزینه‌ی سرویس را وارد کنید",
    }),
    hour: z.number().nullable(),
    minute: z.number().nullable(),
});

type FormData = z.infer<typeof schema>;

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
    const { register, handleSubmit, formState } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const { errors } = formState;

    const onSubmit = () => console.log("data");

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label htmlFor="category" className="form-label">
                    دسته‌بندی
                </label>
                <select
                    {...register("category", { required: true })}
                    id="category"
                >
                    <option value="">لطفا یک دسته‌(مهارت) انتخاب کنید</option>
                    <option value="میکاپ">میکاپ</option>
                    <option value="مو">مو</option>
                    <option value="ناخن">ناخن</option>
                </select>
                {errors.category && <p>{errors.category.message}</p>}
            </div>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">
                    عنوان
                </label>
                <input
                    {...register("title", { required: true, minLength: 4 })}
                    type="text"
                    id="title"
                />
                {errors.title && <p>{errors.title.message}</p>}
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">
                    توضیحات
                </label>
                <textarea
                    {...register("description", {
                        required: true,
                        minLength: 20,
                    })}
                    id="description"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="price" className="form-label">
                    هزینه
                </label>
                <input
                    {...register("price", { required: true, minLength: 5 })}
                    id="price"
                    type="number"
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
                            {...register("minute", {
                                required: true,
                                minLength: 1,
                            })}
                            id="minute"
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
                            {...register("hour", {
                                required: true,
                                minLength: 1,
                            })}
                            id="hour"
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
