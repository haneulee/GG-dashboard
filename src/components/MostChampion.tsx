import React, { FC } from "react";
import constants from "src/constants";
import { Champion } from "src/types";
import { getKDA, getKDAColor, getWinPct } from "src/util/utility";

interface Props {
    champions: Champion[];
}

export const MostChampion: FC<Props> = ({ champions }) => {

    const defaultChampion = () => {
        const len = champions.length;
        const count = len < 3 ? 3 - len : 0;

        for (let i = 0; i < count; i++) {
            return (
                <div className="flex flex-row text-center text-xs">
                    <div className="pl-3 py-2">
                        <img src={"/images/group.png"} width="40" className="rounded-full" alt="" />
                    </div>
                    <div className="p-2 flex flex-col self-center">
                        <div className="text-championColor text-left">
                            {constants.NO_CHAMPION}
                        </div>
                    </div>
                </div>
            )
        }
    }

    return (
        <div className="flex flex-col w-full text-sm border-r text-soloRatingText border-soloRatingBoxBorder">
            {champions.map((champion, index) => {
                const games = champion.wins + champion.losses;
                const kda = getKDA(champion.kills, champion.assists, champion.deaths);
                const winPct = getWinPct(champion.wins, games);
                const kdaColor = getKDAColor(kda);

                return (
                    <div key={index} className="flex flex-row text-center text-xs">
                        <div className="pl-3 py-2" title={champion.name}>
                            <img src={champion.imageUrl} width="40" className="rounded-full" alt={champion.name} />
                        </div>
                        <div className="p-2 flex flex-col">
                            <div className="text-soloRatingTextGray font-bold text-left" title={champion.name}>
                                {champion.name}
                            </div>
                            <div>
                                <span className={`${winPct >= 60 ? 'text-loseGraphBorder' : 'text-soloRatingTextGray'} font-bold`}>
                                    {winPct}%
                                </span>
                                <span title="평균 CS (CS/분)">
                                    ({champion.wins}승 {champion.losses}패)
                                </span>
                                <span> | </span>
                                <span className={`${kdaColor}`} title="최고 CS (CS/분)">
                                    {kda}평점
                                </span>
                            </div>
                        </div>
                    </div>)
            })}
            {defaultChampion()}
        </div>
    )
};
