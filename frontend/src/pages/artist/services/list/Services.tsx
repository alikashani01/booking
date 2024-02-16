import { useEffect, useState } from "react";
import useGetList from "../../../../features/artist/service/hooks/useGetList";
import useArtistServiceStore from "../../../../features/artist/service/store";
import Header from "./_components/header/Header";
import ListContainer from "./_components/list/List";
import SubHeader from "./_components/sub-header/SubHeader";

const Services = () => {
    const [edit, setEdit] = useState(false);

    const [skill, setSkill] = useState("همه");

    const { data } = useGetList();

    const setServices = useArtistServiceStore((s) => s.setServices);

    useEffect(() => {
        setServices(data || []);
    }, [setServices, data]);

    return (
        <div>
            <Header />
            <SubHeader
                skill={skill}
                setSkill={setSkill}
                edit={edit}
                setEdit={setEdit}
            />
            <ListContainer skill={skill} edit={edit} />
        </div>
    );
};

export default Services;
