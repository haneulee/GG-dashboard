import React from "react";


export const ChampionRank: React.FC = () => {
    return (
        <div className="bg-championInfoBg flex flex-row justify-between text-center border-b border-soloRatingBoxBorder">
            <div className="pl-3 py-2" title="레오나">
                <a href="/champion/leona/statistics" target="_blank">
                    <img src="//opgg-static.akamaized.net/images/lol/champion/Leona.png?image=c_scale,q_auto,w_45&amp;v=1626880099" width="45" className="rounded-full" alt="레오나" />
                </a>
            </div>
            <div className="p-2">
                <div className="text-soloRatingTextGray font-bold text-left" title="레오나">
                    <a href="/champion/leona/statistics" target="_blank">
                        레오나
                    </a>
                </div>
                <div className="text-xs" title="평균 CS (CS/분)">
                    CS 38.9 (1.4)
                </div>
            </div>
            <div className="p-2">
                <div className="text-soloRatingTextGray font-bold" title="">
                    <span className="KDA">2.29:1</span>
                    <span className="Text">평점</span>
                </div>
                <div className="text-xs">
                    <span className="Kill">2.9</span>
                    <span className="Bar">/</span>
                    <span className="Death">7.3</span>
                    <span className="Bar">/</span>
                    <span className="Assist">13.8</span>
                </div>
            </div>
            <div className="p-2">
                <div className="text-soloRatingTextGray font-bold" title="">
                    54%
                </div>
                <div className="text-xs">331 게임</div>
            </div>
        </div>

    )
};
