import constants from "src/constants";
import { FC } from "react";
import { ITEM } from "src/types";
import { Tooltip } from "src/components/common/Tooltip";

interface Props {
    items: ITEM[];
    isWin: boolean;
    visionWardsBought: number;
}

export const Item: FC<Props> = ({ items, isWin, visionWardsBought }) => {
    const renderNoImg = (count: number) => {
        const result = [];
        for (let i = 0; i < count; i++) {
            result.push(<div key={i} className="pr-px2 pb-px2">
                <img src="https://opgg-static.akamaized.net/images/pattern/opacity.1.png" className="rounded-sm w-full" alt="" width="22px" />
            </div>);
        }
        return result;
    };

    return (
        <div className="p-1 self-center">
            <div className="grid grid-cols-4 min-w-max">
                {items.map((item, i) =>
                    <Tooltip key={i} message={constants.TOOLTIP_MSG}>
                        <div className="pr-px2 pb-px2 cursor-pointer">
                            <img src={item.imageUrl} className=" rounded-sm " alt="" width="22px" />
                        </div>
                    </Tooltip>)}
                {items.length < 7 && renderNoImg(7 - items.length)}
                <button className="pl-px2" title="" type="button">
                    <img src={isWin ? "//opgg-static.akamaized.net/css3/sprite/images/icon-buildblue-p.png" : "//opgg-static.akamaized.net/css3/sprite/images/icon-buildred-p.png"} alt="" width="22px" />
                </button>
            </div>
            <div className="flex flex-row justify-center m-1">
                <img src="//opgg-static.akamaized.net/images/site/summoner/icon-ward-red.png" className="mr-1" alt="" />
                <span className="wards vision">제어 와드 {visionWardsBought}</span></div>
        </div>
    );
}
