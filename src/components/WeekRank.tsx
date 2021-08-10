import React from "react";


export const WeekRank: React.FC = () => {
    return (
        <div className="bg-championInfoBg flex flex-row justify-between text-center border-b border-soloRatingBoxBorder">
            <div className="pl-3 py-2" title="레오나">
                <a href="/champion/leona/statistics" target="_blank">
                    <img src="//opgg-static.akamaized.net/images/lol/champion/Leona.png?image=c_scale,q_auto,w_45&amp;v=1626880099" width="45" className="rounded-full" alt="레오나" />
                </a>
            </div>
            <div className="p-2 self-center">
                <div className="text-soloRatingTextGray font-bold text-left" title="레오나">
                    <a href="/champion/leona/statistics" target="_blank">
                        레오나
                    </a>
                </div>
            </div>
            <div className="p-2 self-center">
                <div className="text-soloRatingTextGray font-bold" title="">
                    54%
                </div>
            </div>
            <div className="p-2 self-center">
                <div className="h-5 flex flex-row rounded-lg">
                    <div className="h-full bg-winGraph border border-winGraphBorder" style={{ width: "70px" }}>
                        <div className="text-xs text-left text-white">15승</div>
                    </div>

                    <div className="h-full bg-loseGraph border border-loseGraphBorder" style={{ width: "30px" }}>
                        <div className="text-xs text-right text-white left-60">6패</div>
                    </div>
                </div>
            </div>
        </div>

    )
};
