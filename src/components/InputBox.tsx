import React from "react";

export const InputBox: React.FC = () => {
    return (
        <div>
            <input
                name="search"
                className="w-80 mr-5 focus:ring-2 focus:ring-yellow-600 focus:ring-opacity-90 focus:outline-none py-3 px-5 rounded-sm"
                type="text"
                placeholder="소환사명,챔피언..."
            />

        </div>
    );
};