import { createBrowserRouter } from "react-router-dom";
import artistRoutes from "./artist/routes";
import Booking from "./booking/artists/Booking";
import Final from "./booking/final/Final";
import Result from "./booking/result/Result";
import Services from "./booking/services/Services";
import customerRoutes from "./customer/routes";
import Landing from "./general/landing/Landing";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Landing />,
    },
    artistRoutes,
    customerRoutes,
    {
        path: "booking/artists",
        element: <Booking />,
    },
    {
        path: "booking/services",
        element: <Services />,
    },
    {
        path: "booking/review-and-date",
        element: <Final />,
    },
    {
        path: "booking/result/:bookId",
        element: <Result />,
    },
]);

export default routes;
