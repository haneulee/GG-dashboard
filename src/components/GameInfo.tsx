import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import api from "../util/APIUtil";
import { GameAverage } from "./GameAverage";
import { GameList } from "./GameList";
import { MostChampion } from "./MostChampion";
import { PositionStat } from "./PositionStat";

interface IGameInfoProps {
    summonerId: string;
}

export const GameInfo: React.FC<IGameInfoProps> = ({ summonerId }) => {
    const [gameType, setGameType] = useState('all');
    const [{ games, champions, summary, positions }, setData] = useState<any>({});

    const getData = useCallback(async () => {
        if (!summonerId) return;
        try {
            const res = await api.fetchMatches(summonerId);
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

    const onTabClick = (e: any) => {
        const { target } = e;
        const targetType = target.getAttribute('data-type')

        if (targetType !== gameType) {
            setGameType(targetType);
        }
    }

    return (
        <>
            <GameInfoWrapper>
                <TabArea>
                    <div className={`p-2 cursor-pointer ${gameType === "all" ? 'border-b-2 border-soloRatingTextBlue text-soloRatingTextBlue' : ''}`} data-type="all" onClick={onTabClick}>
                        전체
                    </div>
                    <div className={`p-2 cursor-pointer ${gameType === "solo" ? 'border-b-2 border-soloRatingTextBlue text-soloRatingTextBlue' : ''}`} data-type="solo" onClick={onTabClick}>
                        솔로게임
                    </div>
                    <div className={`p-2 cursor-pointer ${gameType === "free" ? 'border-b-2 border-soloRatingTextBlue text-soloRatingTextBlue' : ''}`} data-type="free" onClick={onTabClick}>
                        자유랭크
                    </div>
                </TabArea>
                <div className="flex flex-row bg-championInfoBg">
                    <GameAverage summary={summary} />
                    <MostChampion champions={champions} />
                    <PositionStat positions={positions} />
                </div>
            </GameInfoWrapper>
            {games && <GameList games={games} summonerId={summonerId} gameType={gameType} />}
        </>
    )
};

const GameInfoWrapper = styled.div`
    width: 100%;
    height: auto;
    margin: 0.5rem;
    color: #555555;
    background-color: #f2f2f2;
    border: 1px solid #cdd2d2;
    font-size: small;
`;

const TabArea = styled.div`
    text-align: center;
    display: flex;
    flex-direction: row;
    font-weight: bold;
    padding-left: 0.5rem;
    height: 2rem;
    border-bottom: 1px solid #cdd2d2;
    line-height: normal;
`;