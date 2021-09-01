import React, { FC } from "react";
import constants from "src/constants";
import { Position } from "src/types";
import { PositionInfo } from "src/components/PositionInfo";

interface Props {
    positions: Position[];
}

export const PositionStat: FC<Props> = ({ positions }) => {
    return (
        <div className="flex flex-row w-full text-recentSearchColor text-sm ">
            <div className="flex flex-row">
                <div className="p-2 flex flex-col">
                    <div className="p-3">
                        {constants.PREPER_POSITION}
                    </div>
                    <div className="item-center">
                        {positions.map((position, index) => <PositionInfo key={index} position={position} />)}
                    </div>
                </div>
            </div>
        </div >
    )
};