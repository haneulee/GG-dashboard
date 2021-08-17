import React from "react";

interface IPositionStatProps {
    positions?: [{
        games: number;
        losses: number;
        position: string;
        positionName: string;
        wins: number;
    }]
}

export const PositionStat: React.FC<IPositionStatProps> = ({ positions }) => {
    return (
        <div className="flex flex-row w-full text-recentSearchColor text-sm ">
            <div className="flex flex-row">
                <div className="p-2 flex flex-col">
                    <div className="p-3">
                        선호 포지션 (랭크)
                    </div>
                    <div className="item-center">
                        {positions?.map((position, index) => {
                            const games = position?.games || 1;
                            const wins = position?.wins || 1;
                            const winPct = Math.round((wins / games) * 100);
                            const ImgName = position?.positionName === 'Top' ? 'icon-mostposition-top.png' :
                                position?.positionName === 'Jungle' ? 'icon-mostposition-jng.png' :
                                    position?.positionName === 'Mid' ? 'icon-mostposition-mid.png' : 'icon-mostposition-sup.png';

                            return (
                                <div key={index} className="flex flex-row text-center">
                                    <div className="pl-3 py-2" title={position?.positionName}>
                                        <img src={`/images/${ImgName}`} width="37" alt={position?.positionName} />
                                    </div>
                                    <div className="p-2 flex flex-col">
                                        <div className="text-positionColor font-bold text-left" title={position?.positionName}>
                                            {position?.positionName}
                                        </div>
                                        <div className="text-xs ">
                                            <span className="text-soloRatingTextBlue">70% </span>
                                            <span> | </span>
                                            <span className="text-gameAvgYellow" title="최고 CS (CS/분)">
                                                승률 <b>{winPct}</b>%
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
        </div >
    )
};