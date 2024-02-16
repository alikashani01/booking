import { Box, List } from "@mui/material";
import { useState } from "react";
import { useAddDay } from "../../../../../../../features/booking/hooks/useAddDay";
import Item from "./Item";
import Status from "./status/Status";

interface Props {
    setEditTime: (value: boolean) => void;
}

const Container = ({ setEditTime }: Props) => {
    const [status, setStatus] = useState("صبح");
    const { data } = useAddDay();
    return (
        <Box>
            <Status status={status} setStatus={setStatus} />
            <List sx={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {data?.map((time, index) => (
                    <Item time={time} index={index} setEditTime={setEditTime} />
                ))}
            </List>
        </Box>
    );
};

export default Container;
