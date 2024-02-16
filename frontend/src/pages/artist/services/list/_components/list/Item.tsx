import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import { ListItem, Stack, Typography, styled } from "@mui/material";
import { Link } from "react-router-dom";
import { Service } from "../../../../../../features/artist/service/entities/Service";
import Duration from "./Duration";
import Price from "./Price";

interface Props {
    service: Service;
    edit: boolean;
}

const StyledLink = styled(Link)({
    justifyContent: "space-between",
    width: "100%",
    height: "100%",
    padding: "10px 15px",
});

const StyledButton = styled("button")({
    position: "absolute",
    top: "-7px",
    right: "-7px",
    background: "#555",
    borderRadius: "100%",
    padding: "3px",
});

const Item = ({ service, edit }: Props) => {
    console.log(service);

    return (
        <ListItem
            key={service._id}
            sx={{
                padding: 0,
                bgcolor: "#1a1a1a",
                borderRadius: "10px",
                position: "relative",
            }}
        >
            {edit && (
                <StyledButton>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="#fff"
                        className="bi bi-dash"
                        viewBox="0 0 16 16"
                    >
                        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                    </svg>
                </StyledButton>
            )}
            <StyledLink to={`edit-service/${service._id}`}>
                <Stack
                    textAlign="right"
                    gap="5px"
                    alignItems="flex-start"
                    flexGrow={1}
                >
                    <Typography fontFamily="shabnam" color="#fff">
                        {service.title}
                    </Typography>
                    <Typography
                        fontFamily="shabnamthin"
                        color="#aaa"
                        variant="body2"
                    >
                        {service.description}
                    </Typography>
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        width="100%"
                    >
                        <Price value={service.price} />
                        <Duration
                            hour={service.duration?.hour}
                            minute={service.duration?.minute}
                        />
                    </Stack>
                </Stack>
                <ArrowBackIosRoundedIcon
                    sx={{ fontSize: "1rem", color: "#666" }}
                />
            </StyledLink>
        </ListItem>
    );
};

export default Item;
