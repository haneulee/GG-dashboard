import { FC } from "react";
import { SPELL } from "src/types";

interface Props {
    imageUrl: string;
    summonerName: string;
    spells: SPELL[];
    peak: [string];
}

export const Champion: FC<Props> = ({ imageUrl, summonerName, spells, peak }) => {
    return (
        <div className="p-1 self-center flex flex-col min-w-max">
            <div className="flex flex-row">
                <img src={imageUrl} className="rounded-full w-12 h-12" alt={summonerName} />
                <div className="pl-1">
                    {spells.map((spell, i) =>
                        <img key={i} src={spell.imageUrl} className="rounded-md w-6 h-6" alt="" />)}
                </div>
                <div className="pl-1">
                    {peak.map((peakItem, i) =>
                        <img key={i} src={peakItem} className="rounded-md w-6 h-6" alt="" />)}
                </div>
            </div>
            <div className="pt-2 truncate w-px97">
                {summonerName}
            </div>
        </div>
    );
}
