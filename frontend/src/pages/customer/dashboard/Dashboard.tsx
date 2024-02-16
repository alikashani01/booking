import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Link } from "react-router-dom";
import Body from "./_components/body/Body";
import Header from "./_components/header/Header";

const Dashboard = () => {
    return (
        <main style={{ padding: "6px" }}>
            <Header />
            <Body />
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

export default Dashboard;
