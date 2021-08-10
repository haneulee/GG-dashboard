import React from 'react'
import { ChampionInfo } from './components/ChampionInfo';
import { GameInfo } from './components/GameInfo';
import { GameList } from './components/GameList';
import { Header } from './components/Header';
import { MyInfo } from './components/MyInfo';
import { SoloRating } from './components/SoloRating';
import { SubTier } from './components/SubTier';

function App() {
  return (
    <div className="flex flex-col bg-customGray">
      <Header />
      <MyInfo />
      <div className="border-layoutBorderColor border" />
      <div className="flex flex-row p-10">
        <div className="flex flex-col w-5/12">
          <SoloRating />
          <SubTier />
          <ChampionInfo />
        </div>
        <div className="flex flex-col w-full pl-3">
          <GameInfo />
          <GameList />
        </div>
      </div>
    </div>
  );
}

export default App;
