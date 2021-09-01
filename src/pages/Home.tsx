import Lottie from 'react-lottie';
import styled from '@emotion/styled'
import AnimationLottie from '../lottie/lottie-home.json'

const lottieOptions = {
    animationData: AnimationLottie
};

export const Home = () => {
    return (
        <HomeWrapper>
            <Lottie
                options={lottieOptions}
                style={{ width: '100%', height: '100%' }}
            />
            <WelcomeText>
                <h3>Welcome to OP.GG!</h3>
                <h3>Search Summoner ID 🙂💫</h3>
            </WelcomeText>
        </HomeWrapper>
    );
}

const HomeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 100%;
    text-align: center;
    min-width: max-content;
`

const WelcomeText = styled.div`
    position: absolute;
    right: 10px;
    top: 55%;
    text-align: right;
    margin: 0 50px;
    font-size: 3rem;
`