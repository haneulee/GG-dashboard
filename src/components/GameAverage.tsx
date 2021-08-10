import React from "react";


export const GameAverage: React.FC = () => {
    return (
        <div className="flex flex-row w-full text-soloRatingText text-sm border-r border-soloRatingBoxBorder">
            <div className="flex flex-row">
                <div className="p-2 flex flex-col text-center self-center">
                    <div className="WinRatioTitle">
                        <span className="total">20</span>전
                        <span className="win">12</span>승
                        <span className="lose">8</span>패
                    </div>
                    <div className="text-xs w-32 h-32">그래프</div>
                </div>
                <div className="p-2 flex flex-col text-center self-center">
                    <div className="text-xs font-bold">
                        <span className="Kill">3.1</span> /
                        <span className="Death text-loseGraphBorder">7.3</span> /
                        <span className="Assist">10.9</span>
                    </div>
                    <div className="text-lg">
                        <span className="text-gameAvgGreen font-bold">1.92:1</span>
                        <span className="text-loseGraphBorder" title="">(<span>49%</span>)</span>
                    </div>
                </div>
            </div>
        </div>
    )
};