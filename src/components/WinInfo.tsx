import constants from "src/constants";
import { FC } from "react";
import { convertSeconds, timeSince } from "src/util/utility";

interface Props {
    gameType: string;
    createDate: number;
    isWin: boolean;
    gameLength: number;
}

export const WinInfo: FC<Props> = ({ gameType, createDate, isWin, gameLength }) => {
    return (
        <div className="p-1 self-center truncate" style={{ minWidth: "73px" }}>
            <div className="font-bold" title={gameType}>
                {gameType}
            </div>
            <div>
                <span>{timeSince(createDate)}</span>
            </div>
            <div className="w-6 h-0.5 m-auto my-2 bg-soloRatingTextGray opacity-50"></div>
            <div className={`${isWin ? 'text-gameWinBlue' : 'text-loseGraphBorder'} font-bold`}>
                {isWin ? constants.WIN : constants.LOSE}
            </div>
            <div>{convertSeconds(gameLength)}</div>
        </div>
    );
}
