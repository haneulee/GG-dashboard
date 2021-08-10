import React from "react";
import { ChampionRank } from "./ChampionRank";
import { WeekRank } from "./WeekRank";


export const ChampionInfo: React.FC = () => {
    return (
        <div className="w-full h-30 m-2 text-soloRatingText text-sm bg-soloRatingBoxBackground border border-soloRatingBoxBorder">
            <div className="grid justify-items-stretch text-center grid-flow-col border-collapse">
                <div className="p-4 border-soloRatingBoxBorder bg-championInfoBg text-soloRatingTextGray" data-type="Total">
                    <a href="#">
                        챔피언 승률
                    </a>
                </div>
                <div className="p-4 border-l border-b border-soloRatingBoxBorder" data-type="Solo">
                    <a href="#">
                        7일간 랭크 승률
                    </a>
                </div>
            </div>
            <div className="flex flex-col">
                <ChampionRank />
                <ChampionRank />
                <WeekRank />
                {/* <div className="flex justify-center  p-3">
                    <a href="/summoner/champions/userName=LilTommy">더 보기 + 다른 시즌 보기</a>
                </div> */}
            </div>
        </div>
    )
};