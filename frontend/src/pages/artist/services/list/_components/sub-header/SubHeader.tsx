import EditIcon from "@mui/icons-material/Edit";
import { Stack, Typography } from "@mui/material";
import Skills from "./skills/Skills";
import useRemoveServices from "../../../../../../features/artist/service/hooks/useDeleteServices";

interface Props {
    edit: boolean;
    setEdit: (value: boolean) => void;
    skill: string;
    setSkill: (value: string) => void;
}

const buttonStyles = {
    color: "#ff5555",
    fontSize: ".9rem",
    fontFamily: "shabnam",
    wodSpacing: "1px",
};

const SubHeader = ({ skill, setSkill, edit, setEdit }: Props) => {
    const removeServices = useRemoveServices();
    return (
        <Stack
            height="40px"
            direction="row"
            gap="15px"
            padding="5px 15px"
            justifyContent="space-between"
            alignItems="center"
        >
            {edit ? (
                <button
                    style={buttonStyles}
                    onClick={() => removeServices.mutate()}
                >
                    حذف تمام سرویس‌ها
                </button>
            ) : (
                <Skills setSkill={setSkill} skill={skill} />
            )}
            <button onClick={() => setEdit(!edit)}>
                {edit ? (
                    <Typography fontFamily="shabnamthin" fontSize=".9rem">
                        لغو
                    </Typography>
                ) : (
                    <EditIcon sx={{ fontSize: "1.3rem", color: "#0288e0" }} />
                )}
            </button>
        </Stack>
    );
};

export default SubHeader;
