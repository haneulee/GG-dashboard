import React from "react";

interface IMostChampionsProps {
    champions?: {

    }
}


export const MostChampion: React.FC<IMostChampionsProps> = ({ champions }) => {
    return (
        <div className="flex flex-col w-full text-soloRatingText text-sm border-r border-soloRatingBoxBorder">
            <Champion />
            <Champion />
            <Champion />
        </div>
    )
};

const Champion: React.FC = () => {
    return (
        <div className="flex flex-row text-center">
            <div className="pl-3 py-2" title="레오나">
                <a href="/champion/leona/statistics" target="_blank">
                    <img src="//opgg-static.akamaized.net/images/lol/champion/Leona.png?image=c_scale,q_auto,w_45&amp;v=1626880099" width="45" className="rounded-full" alt="레오나" />
                </a>
            </div>
            <div className="p-2 flex flex-col">
                <div className="text-soloRatingTextGray font-bold text-left" title="레오나">
                    <a href="/champion/leona/statistics" target="_blank">
                        레오나
                    </a>
                </div>
                <div>
                    <span className="text-loseGraphBorder">70% </span>
                    <span className="text-xs" title="평균 CS (CS/분)">
                        (7승 3패)
                    </span> |
                    <span className="text-xs text-gameAvgYellow" title="최고 CS (CS/분)">
                        13.01 평점
                    </span>
                </div>
            </div>
        </div>

    )
};
