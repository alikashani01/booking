import { useEffect, useState } from "react";
import { fetchCities } from "./locations";
import styles from "./styles.module.css";

const StateCity = () => {
    const [data, setData] = useState({
        city: "",
        state: "",
    });

    let [cities, setCities] = useState<string[]>([]);

    useEffect(() => {
        fetchCities(data.state, setCities);
    }, [data.state, setCities]);

    const changeHandler: React.ChangeEventHandler<HTMLSelectElement> = (
        event
    ) => {
        const name = event.target.name;
        const value = event.target.value;
        setData({
            ...data,
            [name]: value,
        });
    };

    return (
        <form className={styles.form}>
            <div className={styles.container}>
                <label hidden htmlFor="userEditShippingAddressFormState">
                    استان
                </label>
                <select
                    id="userEditShippingAddressFormState"
                    name="state"
                    onChange={changeHandler}
                    value={data.state}
                >
                    <option value="">استان</option>
                    <option value="تهران">تهران</option>
                    <option value="گیلان">گیلان</option>
                    <option value="آذربایجان شرقی">آذربایجان شرقی</option>
                    <option value="خوزستان">خوزستان</option>
                    <option value="فارس">فارس</option>
                    <option value="اصفهان">اصفهان</option>
                    <option value="خراسان رضوی">خراسان رضوی</option>
                    <option value="قزوین">قزوین</option>
                    <option value="سمنان">سمنان</option>
                    <option value="قم">قم</option>
                    <option value="مرکزی">مرکزی</option>
                    <option value="زنجان">زنجان</option>
                    <option value="مازندران">مازندران</option>
                    <option value="گلستان">گلستان</option>
                    <option value="اردبیل">اردبیل</option>
                    <option value="آذربایجان غربی">آذربایجان غربی</option>
                    <option value="همدان">همدان</option>
                    <option value="کردستان">کردستان</option>
                    <option value="کرمانشاه">کرمانشاه</option>
                    <option value="لرستان">لرستان</option>
                    <option value="بوشهر">بوشهر</option>
                    <option value="کرمان">کرمان</option>
                    <option value="هرمزگان">هرمزگان</option>
                    <option value="چهارمحال و بختیاری">
                        چهارمحال و بختیاری
                    </option>
                    <option value="یزد">یزد</option>
                    <option value="سیستان و بلوچستان">سیستان و بلوچستان</option>
                    <option value="ایلام">ایلام</option>
                    <option value="کهگلویه و بویراحمد">
                        کهگلویه و بویراحمد
                    </option>
                    <option value="خراسان شمالی">خراسان شمالی</option>
                    <option value="خراسان جنوبی">خراسان جنوبی</option>
                    <option value="البرز">البرز</option>
                </select>
            </div>

            <div className={styles.container}>
                <label hidden htmlFor="userEditShippingAddressFormCity">
                    شهر
                </label>
                <select
                    id="userEditShippingAddressFormCity"
                    name="city"
                    onChange={changeHandler}
                    value={data.city}
                >
                    {cities.map((city) => (
                        <option key={city} value={city}>
                            {city}
                        </option>
                    ))}
                </select>
            </div>
        </form>
    );
};

export default StateCity;
