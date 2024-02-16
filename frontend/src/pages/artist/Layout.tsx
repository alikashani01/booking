import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import useGetDetails from "../../features/artist/profile/hooks/useGetDetails";
import useArtistProfileStore from "../../features/artist/profile/store";
import Navbar from "./_components/navbar/Navbar";

const Layout = () => {
    const navigate = useNavigate();

    const artistInfo = useArtistProfileStore((s) => s.artistInfo);

    const { isLoading } = useGetDetails();

    useEffect(() => {
        !artistInfo || (!artistInfo.token && navigate("/", { replace: true }));
    }, [artistInfo, navigate]);

    if (isLoading) return <p>Loading...</p>;

    return (
        <>
            <Outlet />
            <Navbar />
        </>
    );
};

export default Layout;
