import React, { FC } from 'react'
import styled from 'styled-components';
import { Game, TEAM } from 'src/types';
import { TeamPlayer } from "src/components/TeamPlayer";
import { Points } from 'src/components/Points';
import { Level } from './Level';
import { Item } from './Item';
import { Champion } from './Champion';
import { WinInfo } from './WinInfo';

interface Props {
    game: Game;
}

interface GameStylePropType {
    isWin: boolean;
}

export const GameItem: FC<Props> = ({ game }) => {
    const { stats: { general, ward }, champion } = game;

    return (
        <GameWrapper isWin={game.isWin}>
            <WinInfo gameType={game.gameType} createDate={game.createDate} isWin={game.isWin} gameLength={game.gameLength} />
            <Champion imageUrl={champion.imageUrl} summonerName={game.summonerName} spells={game.spells} peak={game.peak} />
            <Points kill={general.kill} death={general.death} assist={general.assist} kdaString={general.kdaString} largestMultiKillString={general.largestMultiKillString} opScoreBadge={general.opScoreBadge} />
            <Level level={champion.level} csPerMin={general.csPerMin} cs={general.cs} contributionForKillRate={general.contributionForKillRate} />
            <Item items={game.items} isWin={game.isWin} visionWardsBought={ward.visionWardsBought} />
            <div className="p-1 self-center flex flex-row">
                {game.teams.map((team: TEAM, i: number) =>
                    <div key={i} className="flex flex-col">
                        {team.players.map((player, j) => <TeamPlayer key={j} player={player} />)}
                    </div>)}
            </div>
            <MoreButton isWin={game.isWin}>
                <Arrow isWin={game.isWin} />
            </MoreButton>
        </GameWrapper>
    )
}

const Arrow = styled.i<GameStylePropType>`
    display: inline-block;
    transform: rotate(45deg);
    padding: 4px;
    margin-top: 100px;
    border: 1px solid ${props => props.isWin ? '#07669F' : '#C6453F'};
    border-left: none;
    border-top: none;
`;

const MoreButton = styled.div<GameStylePropType>`
    align-items: center;
    border: 1px solid ${props => props.isWin ? '#4aa1d2' : '#d67b77'};
    background-color: ${props => props.isWin ? '#64b1e4' : '#e89d99'};
    min-width: 30px;
    position: absolute;
    right: 0px;
    height: 100%;
`;

const GameWrapper = styled.div<GameStylePropType>`
    display: flex;
    position: relative;
    flex-direction: row;
    min-width: 700px;
    max-width: 700px;
    height: 120px;
    justify-content: end;
    margin: 0.5rem;
    font-size: small;
    text-align: center;
    color: #555e5e;
    background-color: ${(props) => (props.isWin ? '#a3cfec' : '#e2b6b3')};
    border-right: ${(props) => (props.isWin ? '1px solid #99b9cf' : '1px solid #cea7a7')};
`;