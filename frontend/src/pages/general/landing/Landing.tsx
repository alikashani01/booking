import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useArtistProfileStore from "../../../features/artist/profile/store";
import useCustomerProfileStore from "../../../features/customer/profile/store";
import Users from "./_components/users/Users";

const Landing = () => {
    const navigate = useNavigate();
    const artistInfo = useArtistProfileStore((s) => s.artistInfo);
    const customerInfo = useCustomerProfileStore((s) => s.customerInfo);
    useEffect(() => {
        artistInfo &&
            artistInfo.token &&
            navigate("/artist", { replace: true });
    }, [artistInfo, navigate]);
    useEffect(() => {
        customerInfo &&
            customerInfo.token &&
            navigate("/customer", { replace: true });
    }, [customerInfo, navigate]);

    return (
        <main>
            <Users />
            <Link to="/booking/artists">
                <Fab
                    color="primary"
                    aria-label="add"
                    sx={{
                        position: "fixed",
                        bottom: "10px",
                        left: "50%",
                        transform: "translateX(-50%)",

                        width: "45px",
                        height: "45px",
                    }}
                >
                    <AddIcon sx={{ fontSize: "1.5rem" }} />
                </Fab>
            </Link>
        </main>
    );
};

export default Landing;
