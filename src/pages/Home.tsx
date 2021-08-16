import React from "react";
import Lottie from 'react-lottie';
import AnimationLottie from '../lottie/lottie-home.json'

const lottieOptions = {
    animationData: AnimationLottie
};

export const Home = () => {
    return (
        <div className="flex flex-col w-full min-h-full m-auto text-center ">
            <Lottie
                options={lottieOptions}
                style={{ width: '100%', height: '100%' }}
            />
            <div className="my-50 absolute right-10 top-96 text-5xl text-right">
                <h3>Welcome to OP.GG!</h3>
                <h3>Search Summoner ID 🙂💫</h3>
            </div>
        </div>
    );
}