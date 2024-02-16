import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router";

export const useToggle = () => {
    const location = useLocation();

    const [toggle, setToggle] = useState({
        navPart: false,
        navCategory: "",
    });

    const handleToggle = useCallback(
        (key: string, value: boolean, category: string) => {
            setToggle((prevToggle) => ({
                ...prevToggle,
                navCategory: category,
                [key]: value,
            }));
        },
        []
    );

    useEffect(() => {
        if (toggle.navPart) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [toggle]);

    useEffect(() => {
        setToggle((prevToggle) => ({
            ...prevToggle,
            navPart: false,
        }));
    }, [location.pathname]);

    return { toggle, handleToggle };
};
