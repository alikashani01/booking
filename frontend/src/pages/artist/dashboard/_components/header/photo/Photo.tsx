import { Avatar } from "@mui/material";
import { useState } from "react";
import EditPhoto from "./edit/EditPhoto";

const Photo = () => {
    const [editOpen, setEditOpen] = useState(false);
    return (
        <>
            <Avatar
                src=""
                alt=""
                sx={{
                    width: "50px",
                    height: "50px",
                    bgcolor: "#1f1f1f",
                    cursor: "pointer",
                    color: "#222",
                }}
                onClick={() => setEditOpen(true)}
            />
            <EditPhoto open={editOpen} setOpen={setEditOpen} />
        </>
    );
};

export default Photo;
