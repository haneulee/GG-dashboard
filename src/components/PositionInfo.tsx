import { FC } from "react";
import constants from "src/constants";
import { Position } from "src/types";
import { getWinPct } from "src/util/utility";

interface Props {
    position: Position;
}


export const PositionInfo: FC<Props> = ({ position }) => {
    const winPct = getWinPct(position.wins, position.games);
    const ImgName = position.positionName === 'Top' ? 'icon-mostposition-top.png' :
        position.positionName === 'Jungle' ? 'icon-mostposition-jng.png' :
            position.positionName === 'Mid' ? 'icon-mostposition-mid.png' : 'icon-mostposition-sup.png';

    return (
        <div className="flex flex-row text-center">
            <div className="pl-3 py-2" title={position.positionName}>
                <img src={`/images/${ImgName}`} width="37" alt={position.positionName} />
            </div>
            <div className="p-2 flex flex-col">
                <div className="text-positionColor font-bold text-left" title={position.positionName}>
                    {position.positionName}
                </div>
                <div className="text-xs ">
                    <span className="text-soloRatingTextBlue">70% </span>
                    <span> | </span>
                    <span className="text-gameAvgYellow" title="최고 CS (CS/분)">
                        {constants.WIN_PCT} <b>{winPct}</b>%
                    </span>
                </div>
            </div>
        </div>
    )
}