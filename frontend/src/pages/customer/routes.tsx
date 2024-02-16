import Layout from "./Layout";
import Dashboard from "./dashboard/Dashboard";

const customerRoutes = {
    path: "/customer",
    element: <Layout />,
    children: [{ index: true, element: <Dashboard /> }],
};

export default customerRoutes;
