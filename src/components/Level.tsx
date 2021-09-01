import { FC } from "react";
import constants from "src/constants";

interface Props {
    level: number;
    csPerMin: number;
    cs: number;
    contributionForKillRate: string;
}

export const Level: FC<Props> = ({ level, csPerMin, cs, contributionForKillRate }) => {
    return (
        <div className="p-1 self-center text-xs" style={{ minWidth: "80px" }}>
            <div>
                {constants.LEVEL} {level}
            </div>
            <div>
                <span>{cs} ({csPerMin})</span> CS
            </div>
            <div className="text-loseGraphBorder" title="">
                {constants.KILL} {contributionForKillRate}
            </div>
            <div>
                <span>{constants.AVERAGE}</span>
                <br />
                <b className="text-gameTextBlack">Silver 3</b>
            </div>
        </div>
    );
}
