import React, { FC, useState } from "react";
import constants from "src/constants";
import styled from "@emotion/styled"
import useMostInfo from "src/hooks/useMostInfo";
import { ChampionRank } from "src/components/ChampionRank";
import { WeekRank } from "src/components/WeekRank";

interface Props {
    summonerId: string;
}

interface TabPropType {
    tab: string;
}

export const ChampionInfo: FC<Props> = ({ summonerId }) => {
    const [tab, setTab] = useState(constants.CHAMPION_RATING);
    const { data } = useMostInfo(summonerId);

    const onTabClick = (e: React.MouseEvent) => {
        const { id } = e.target as HTMLDivElement;

        if (id === constants.CHAMPION_RATING && tab !== constants.CHAMPION_RATING) {
            setTab(constants.CHAMPION_RATING);
        } else if (id === constants.RECENT_RATING && tab !== constants.RECENT_RATING) {
            setTab(constants.RECENT_RATING);
        }
    }

    const renderTabContents = () => {
        let contents;

        if (tab === constants.CHAMPION_RATING) {
            contents = data.champions.sort((a: any, b: any) => { return b.games - a.games; });
            return contents.map((champion: any, id: number) => <ChampionRank key={id} champion={champion} />)
        } else if (tab === constants.RECENT_RATING) {
            contents = data.recentWinRate.sort((a: any, b: any) => { return (b.wins + b.losses) - (a.wins + a.losses); });
            return contents.map((recentWin: any, id: number) => <WeekRank key={id} recentWin={recentWin} />)
        }
    }

    return (
        <ChampionWrapper>
            <div className="grid grid-cols-2 text-center border-collapse h-10">
                <TabChampion tab={tab} id={constants.CHAMPION_RATING} onClick={onTabClick}>
                    {constants.CHAMPION_RATING_TITLE}
                </TabChampion>
                <TabRecent tab={tab} id={constants.RECENT_RATING} onClick={onTabClick}>
                    {constants.RECENT_RATING_TITLE}
                </TabRecent>
            </div >
            <div className="flex flex-col">
                {renderTabContents()}
            </div>
        </ChampionWrapper >
    )
};

const ChampionWrapper = styled.div`
    width: 100%;
    height: auto;
    margin: 0.5rem;
    color: #879292;
    background-color: #f2f2f2;
    border: 1px solid #cdd2d2;
    font-size: small;
`;

const TabChampion = styled.div<TabPropType>`
    padding-top: 0.5rem;
    cursor: pointer;
    background-color: ${(props) => (props.tab === constants.CHAMPION_RATING && '#ededed')}; 
    color: ${(props) => (props.tab === constants.CHAMPION_RATING && '#555e5e')}; 
    border-right: ${(props) => (props.tab === constants.CHAMPION_RATING && '1px solid #cdd2d2')};
    border-bottom: ${(props) => (props.tab === constants.RECENT_RATING && '1px solid #cdd2d2')}; 
`;

const TabRecent = styled.div<TabPropType>`
    padding-top: 0.5rem;
    cursor: pointer;
    background-color: ${(props) => (props.tab === constants.RECENT_RATING && '#ededed')}; 
    color: ${(props) => (props.tab === constants.RECENT_RATING && '#555e5e')}; 
    border-left: ${(props) => (props.tab === constants.RECENT_RATING && '1px solid #cdd2d2')};
    border-bottom: ${(props) => (props.tab === constants.CHAMPION_RATING && '1px solid #cdd2d2')};  
`;