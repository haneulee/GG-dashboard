import React from "react";

interface IPositionStatProps {
    positions?: {

    }
}

export const PositionStat: React.FC<IPositionStatProps> = ({ positions }) => {
    return (
        <div className="flex flex-row w-full text-soloRatingText text-sm ">
            <div className="flex flex-row">
                <div className="p-2 flex flex-col">
                    <div className="p-3">
                        선호 포지션 (랭크)
                    </div>
                    <div className="item-center">
                        <Position />
                        <Position />
                    </div>
                </div>
            </div>
        </div>
    )
};

const Position: React.FC = () => {
    return (
        <div className="flex flex-row text-center">
            <div className="pl-3 py-2" title="레오나">
                <a href="/champion/leona/statistics" target="_blank">
                    <img src="/images/icon-mostposition-top.png" width="37" alt="레오나" />
                </a>
            </div>
            <div className="p-2 flex flex-col">
                <div className="text-soloRatingTextGray font-bold text-left" title="레오나">
                    <a href="/champion/leona/statistics" target="_blank">
                        레오나
                    </a>
                </div>
                <div>
                    <span className="text-soloRatingTextBlue">70% </span> |
                    <span className="text-xs text-gameAvgYellow" title="최고 CS (CS/분)">
                        Win Rate <b>53</b>%
                    </span>
                </div>
            </div>
        </div>

    )
};
