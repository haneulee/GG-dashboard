import React from "react";
import useFetch from "../hooks/useFetch";
import { ChampionRank } from "./ChampionRank";
import { GameAverage } from "./GameAverage";
import { GameList } from "./GameList";
import { MostChampion } from "./MostChampion";
import { PositionStat } from "./PositionStat";
import { WeekRank } from "./WeekRank";


export const GameInfo: React.FC = () => {
    const testId = "Hide on bush";
    const { loading, data, error } = useFetch(`https://codingtest.op.gg/api/summoner/${testId}/matches`);

    // const { data: second } = useFetch(`https://codingtest.op.gg/api/summoner/${testId}/matchDetail/${270820716}`);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>;

    console.log(data);
    // console.log(second);

    const { summary, champions, positions, games } = data;

    return (
        <>
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
                    <GameAverage summary={summary} />
                    <MostChampion champions={champions} />
                    <PositionStat positions={positions} />
                </div>
            </div>
            <GameList games={games} />
        </>
    )
};