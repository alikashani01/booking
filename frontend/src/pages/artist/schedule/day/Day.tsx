import { useState } from "react";
import Times from "./_components/List";
import Header from "./_components/header/Header";
import SubHeader from "./_components/sub-header/SubHeader";
import TimeStatus from "./_components/time-status/TimeStatus";

const Day = () => {
    const [status, setStatus] = useState("صبح");
    return (
        <main>
            <Header />
            <SubHeader />
            <TimeStatus status={status} setStatus={setStatus} />
            <Times />
        </main>
    );
};

export default Day;
