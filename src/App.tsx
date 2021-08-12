import React from 'react'
import { ChampionInfo } from './components/ChampionInfo';
import { GameInfo } from './components/GameInfo';
import { Header } from './components/Header';
import { MyInfo } from './components/MyInfo';
import { SoloRating } from './components/SoloRating';
import { SubTier } from './components/SubTier';
import useFetch from './hooks/useFetch';

function App() {
  const testId = "Hide on bush";
  const { loading, data, error } = useFetch(`https://codingtest.op.gg/api/summoner/${testId}`);

  // console.log(data);

  return (
    <div className="flex flex-col bg-customGray">
      <Header />
      {error ? <p>Error.</p> : loading ? <p>Loading...</p> : (
        <>
          <MyInfo summoner={data?.summoner} />
          <div className="border-layoutBorderColor border" />
          <div className="flex flex-row p-10 min-w-4xl max-w-6xl self-center">
            <div className="flex flex-col w-5/12">
              <SoloRating leagueInfo={data?.summoner?.['leagues'][0]} />
              <SubTier leagueInfo={data?.summoner?.['leagues'][1]} />
              <ChampionInfo />
            </div>
            <div className="flex flex-col w-full pl-3">
              <GameInfo />
            </div>
          </div>
        </>
      )}

    </div>
  );
}

export default App;
