import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./styles.module.css";

interface Props {
    title: string;
    path: string;
    icon: ReactNode;
    activeIcon: ReactNode;
    isActive: boolean;
}

const Item = ({ title, path, icon, activeIcon, isActive }: Props) => {
    const location = useLocation();
    isActive = location.pathname === `/${path}`;
    return (
        <NavLink
            className={styles.item}
            to={`/${path}`}
            style={({ isActive, isTransitioning }) => {
                return {
                    fontWeight: isActive ? "bold" : "",
                    color: isActive ? "#bbb" : "#777",
                    viewTransitionName: isTransitioning ? "slide" : "",
                };
            }}
        >
            <Box
                height="22px"
                width="22px"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                {isActive ? activeIcon : icon}
            </Box>
            <Typography
                fontFamily="shabnamthin"
                fontSize=".68rem"
                paddingTop="1.5px"
            >
                {title}
            </Typography>
        </NavLink>
    );
};

export default Item;
