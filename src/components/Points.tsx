import { FC } from "react";
import constants from "src/constants";

interface Props {
    kill: number;
    death: number;
    assist: number;
    kdaString: string;
    largestMultiKillString: string;
    opScoreBadge: string;
}

export const Points: FC<Props> = ({ kill, death, assist, kdaString, largestMultiKillString, opScoreBadge }) => {
    return (
        <div className="p-1 self-center min-w-max" style={{ width: "120px" }}>
            <div className="text-sm pb-1">
                <span className="font-bold">{kill}</span> /
                <span className="font-bold text-loseGraphBorder"> {death}</span> /
                <span className="font-bold"> {assist}</span>
            </div>
            <div className="font-bold pb-1">
                <span className="text-gameTextBlack">{kdaString}</span> {constants.POINT}
            </div>
            <div className="p-1 text-white text-xs">
                {largestMultiKillString && <span className="bg-loseGraph border-loseGraphBorder border rounded-lg px-1 ml-1">{largestMultiKillString}</span>}
                {opScoreBadge && <span className="bg-gameBadgeBg border-gameBadgeBorder border rounded-lg px-1 ml-1">{opScoreBadge}</span>}
            </div>
        </div>
    );
}
