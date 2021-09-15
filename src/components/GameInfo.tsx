import React, { FC, useState } from "react";
import styled from "styled-components";
import useMatches from "src/hooks/useMatches";
import { GameAverage } from "src/components/GameAverage";
import { GameList } from "src/components/GameList";
import { MostChampion } from "src/components/MostChampion";
import { PositionStat } from "src/components/PositionStat";
import constants from "src/constants";

interface Props {
    summonerId: string;
}

export const GameInfo: FC<Props> = ({ summonerId }) => {
    const [gameType, setGameType] = useState(constants.GAME_TAB_ALL);
    const { data } = useMatches(summonerId);
    const { games, champions, summary, positions } = data;

    const onTabClick = (e: React.MouseEvent) => {
        const targetEl = e.target as HTMLDivElement;
        const targetType = targetEl.getAttribute('data-type') || '';

        if (targetType !== gameType) {
            setGameType(targetType);
        }
    }

    return (
        <>
            <GameInfoWrapper>
                <TabArea>
                    <div className={`p-2 cursor-pointer ${gameType === constants.GAME_TAB_ALL ? 'border-b-2 border-soloRatingTextBlue text-soloRatingTextBlue' : ''}`} data-type={constants.GAME_TAB_ALL} onClick={onTabClick}>
                        {constants.GAME_TAB_ALL_TITLE}
                    </div>
                    <div className={`p-2 cursor-pointer ${gameType === constants.GAME_TAB_SOLO ? 'border-b-2 border-soloRatingTextBlue text-soloRatingTextBlue' : ''}`} data-type={constants.GAME_TAB_SOLO} onClick={onTabClick}>
                        {constants.GAME_TAB_SOLO_TITLE}
                    </div>
                    <div className={`p-2 cursor-pointer ${gameType === constants.GAME_TAB_FREE ? 'border-b-2 border-soloRatingTextBlue text-soloRatingTextBlue' : ''}`} data-type={constants.GAME_TAB_FREE} onClick={onTabClick}>
                        {constants.GAME_TAB_FREE_TITLE}
                    </div>
                </TabArea>
                <div className="flex flex-row bg-championInfoBg">
                    <GameAverage summary={summary} />
                    <MostChampion champions={champions} />
                    <PositionStat positions={positions} />
                </div>
            </GameInfoWrapper>
            <GameList games={games} summonerId={summonerId} gameType={gameType} />
        </>
    )
};

const GameInfoWrapper = styled.div`
    width: 100%;
    height: auto;
    margin: 0.5rem;
    width: 700px;
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