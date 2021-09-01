import useSummoner from "src/hooks/useSummoner";
import { MyInfo } from "src/components/MyInfo";
import { SubContent } from "src/components/SubContent";
import { useLocation } from "react-router-dom";

export const Summoner = () => {
    const location = useLocation();
    const [_, query] = location.search.split("?term=");
    const { data } = useSummoner(query);

    return (
        <div className="min-h-max">
            <MyInfo data={data} />
            <div className="border-layoutBorderColor border" />
            <SubContent data={data} query={query} />
        </div>
    );
}