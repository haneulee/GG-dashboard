import React, { useCallback, useEffect, useState } from "react";
import api from "../util/APIUtil";
import styled from "@emotion/styled"
import { ChampionRank } from "./ChampionRank";
import { WeekRank } from "./WeekRank";

interface IChampionInfoProps {
    summonerId: string;
}

interface IDataProps {
    champions: [],
    recentWinRate: []
}

export const ChampionInfo: React.FC<IChampionInfoProps> = ({ summonerId }) => {
    const [tab, setTab] = useState('champion');
    const [{ champions, recentWinRate }, setData] = useState<IDataProps>({} as IDataProps);

    const getData = useCallback(async () => {
        if (!summonerId) return;
        try {
            const res = await api.fetchMostInfo(summonerId);
            if (res) {
                setData(res);
            }
        } catch (error) {
            console.log(error);
        }
    }, [summonerId])

    useEffect(() => {
        getData();
    }, [getData]);

    const onTabClick = (e: React.MouseEvent) => {
        const { id } = e.target as HTMLDivElement;

        if (id === 'champion') {
            if (tab !== "champion") {
                setTab('champion');
            }
        } else {
            if (tab !== "recent") {
                setTab('recent');
            }
        }
    }

    const renderTabContents = () => {
        let data;

        if (tab === 'champion') {
            data = champions?.sort((a: any, b: any) => { return b.games - a.games; });
            return data?.map((champion: any, id: number) => <ChampionRank key={id} champion={champion} />)
        } else if (tab === 'recent') {
            data = recentWinRate?.sort((a: any, b: any) => { return (b.wins + b.losses) - (a.wins + a.losses); });
            return data?.map((recentWin: any, id: number) => <WeekRank key={id} recentWin={recentWin} />)
        }
    }

    return (
        <ChampionWrapper>
            <div className="grid grid-cols-2 text-center border-collapse h-10">
                <div className={`pt-2 border-soloRatingBoxBorder cursor-pointer ${tab === 'champion' && 'bg-championInfoBg text-soloRatingTextGray border-r'} ${tab === 'recent' ? 'border-b' : ''}`} id='champion' onClick={onTabClick}>
                    챔피언 승률
                </div>
                <div className={`pt-2 border-soloRatingBoxBorder cursor-pointer ${tab === 'recent' && 'bg-championInfoBg text-soloRatingTextGray border-l'} ${tab === 'champion' ? 'border-b' : ''}`} id='recent' onClick={onTabClick}>
                    7일간 랭크 승률
                </div>
            </div>
            <div className="flex flex-col">
                {renderTabContents()}
            </div>
        </ChampionWrapper>
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