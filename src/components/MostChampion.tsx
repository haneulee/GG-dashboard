import React from "react";

interface IMostChampionsProps {
    champions?: [{
        assists: number;
        deaths: number;
        games: number;
        id: number;
        imageUrl: string;
        key: string;
        kills: number;
        losses: number;
        name: string;
        wins: number;
    }]
}

export const MostChampion: React.FC<IMostChampionsProps> = ({ champions }) => {

    const defaultChampion = () => {
        const len = champions?.length || 0;
        const count = len < 3 ? 3 - len : 0

        for (let i = 0; i < count; i++) {
            return (
                <div className="flex flex-row text-center text-xs">
                    <div className="pl-3 py-2">
                        <img src={"/images/group.png"} width="40" className="rounded-full" alt="" />
                    </div>
                    <div className="p-2 flex flex-col self-center">
                        <div className="text-championColor text-left">
                            챔피언 정보가 없습니다.
                        </div>
                    </div>
                </div>
            )
        }
    }

    return (
        <div className="flex flex-col w-full text-soloRatingText text-sm border-r border-soloRatingBoxBorder">
            {champions?.map((champion, index) => {
                const games = (champion?.wins || 0) + (champion?.losses || 0);
                const kills = champion?.kills || 1;
                const assists = champion?.assists || 1;
                const deaths = champion?.deaths || 1;
                const wins = champion?.wins || 1;

                const winPct = Math.round((wins / games) * 100);
                const kda = Math.round((kills + assists) / deaths);
                const kdaColor = kda >= 5 ? "text-gameAvgYellow" : kda >= 4 ? "text-kdaBlue" : kda >= 3 ? "text-kdaGreen" : "text-soloRatingTextGra";

                return (
                    <div key={index} className="flex flex-row text-center text-xs">
                        <div className="pl-3 py-2" title={champion?.name}>
                            <img src={champion?.imageUrl} width="40" className="rounded-full" alt={champion?.name} />
                        </div>
                        <div className="p-2 flex flex-col">
                            <div className="text-soloRatingTextGray font-bold text-left" title={champion?.name}>
                                {champion?.name}
                            </div>
                            <div>
                                <span className={`${winPct >= 60 ? 'text-loseGraphBorder' : 'text-soloRatingTextGray'} font-bold`}>{winPct}% </span>
                                <span title="평균 CS (CS/분)">
                                    ({champion?.wins}승 {champion?.losses}패)
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
