import React from "react";
import { ChampionRank } from "./ChampionRank";
import { GameAverage } from "./GameAverage";
import { GameList } from "./GameList";
import { MostChampion } from "./MostChampion";
import { PositionStat } from "./PositionStat";
import { WeekRank } from "./WeekRank";


export const GameInfo: React.FC = () => {
    return (
        <div className="w-full m-2 text-soloRatingText text-sm bg-soloRatingBoxBackground border border-soloRatingBoxBorder">
            <div className="text-center flex flex-row pl-2 h-10 font-bold border-b border-soloRatingBoxBorder ">
                <div className="p-2 border-b-2 border-soloRatingTextBlue text-soloRatingTextBlue" data-type="Total">
                    <a href="#">
                        전체
                    </a>
                </div>
                <div className="p-2" data-type="Solo">
                    <a href="#">
                        솔로게임
                    </a>
                </div>
                <div className="p-2" data-type="Solo">
                    <a href="#">
                        자유랭크
                    </a>
                </div>
            </div>
            <div className="flex flex-row bg-championInfoBg">
                <GameAverage />
                <MostChampion />
                <PositionStat />
            </div>
        </div>
    )
};