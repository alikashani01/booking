import Layout from "./Layout";
import Books from "./books/Books";
import Dashboard from "./dashboard/Dashboard";
import CalendarManagement from "./schedule/calendar-management/CalendarManagement";
import Day from "./schedule/day/Day";
import Week from "./schedule/week/Week";
import Services from "./services/list/Services";
import NewService from "./services/new/NewService";

const artistRoutes = {
    path: "/artist",
    element: <Layout />,
    children: [
        { index: true, element: <Dashboard /> },
        { path: "books", element: <Books /> },
        { path: "services", element: <Services /> },
        { path: "services/new-service", element: <NewService /> },
        { path: "services/new-service", element: <NewService /> },
        { path: "schedule", element: <Week /> },
        { path: "schedule/day/:dayName", element: <Day /> },
        {
            path: "schedule/calendar-management",
            element: <CalendarManagement />,
        },
    ],
};

export default artistRoutes;
