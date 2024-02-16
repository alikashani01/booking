import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import useGetDetails from "../../features/customer/profile/hooks/useGetDetails";
import useCustomerProfileStore from "../../features/customer/profile/store";

const Layout = () => {
    const navigate = useNavigate();

    const customerInfo = useCustomerProfileStore((s) => s.customerInfo);

    const setCustomerDetails = useCustomerProfileStore(
        (s) => s.setCustomerDetails
    );

    const { isLoading, data } = useGetDetails();

    useEffect(() => {
        !customerInfo && navigate("/", { replace: true });
    }, [customerInfo]);

    useEffect(() => {
        if (data)
            setCustomerDetails({
                fullName: data?.fullName!,
                mobile: data?.mobile,
            });
    }, [data]);

    if (isLoading) return <p>Loading...</p>;

    return <Outlet />;
};

export default Layout;
