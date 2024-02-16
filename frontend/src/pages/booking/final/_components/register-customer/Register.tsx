import { useEffect, useState } from "react";
import useGetDetails from "../../../../../features/customer/profile/hooks/useGetDetails";
import useCustomerProfileStore from "../../../../../features/customer/profile/store";
import useRegisterStore from "../../../../../features/customer/register/store";
import EditName from "../../../../customer/profile/_components/edit-name/EditName";
import AddMobile from "./add-mobile/AddMobile";
import VerifyMobile from "./verify-mobile/VerifyMobile";

const Register = () => {
    const [openName, setOpenName] = useState(false);

    const { data, isLoading } = useGetDetails();

    const customerInfo = useCustomerProfileStore((s) => s.customerInfo);

    const setToggle = useRegisterStore((s) => s.setToggle);

    useEffect(() => {
        !customerInfo.token && setToggle("add");
    }, [customerInfo]);

    useEffect(() => {
        !isLoading &&
            customerInfo.token &&
            !data?.fullName &&
            setOpenName(true);
    }, [isLoading, customerInfo, data?.fullName]);
    return (
        <>
            <AddMobile />
            <VerifyMobile />
            <EditName open={openName} setOpen={setOpenName} />
        </>
    );
};

export default Register;
