
import useFetch from "../hooks/useFetch";
import { convertSeconds, timeSince } from "../util/utility";
import { TeamPlayer } from "./TeamPlayer";
import { Tooltip } from "./Tooltip";

interface IGameItemProps {
    game: {
        champion: {
            imageUrl: string,
            level: number;
        };
        createDate: number;
        gameId: string;
        gameLength: number;
        gameType: string;
        isWin: false
        items: [{ imageUrl: string; }]
        mapInfo: null
        mmr: number;
        needRenew: false
        peak: [string]
        spells: [{ imageUrl: string; }]
        stats: {
            general: {
                assist: number;
                contributionForKillRate: string;
                cs: number;
                csPerMin: number;
                death: number;
                goldEarned: number;
                kdaString: string;
                kill: number;
                largestMultiKillString: string;
                opScoreBadge: string;
                totalDamageDealtToChampions: number;
            },
            ward: {
                sightWardsBought: number;
                visionWardsBought: number;
            }
        };
        summonerId: string;
        summonerName: string;
        tierRankShort: string;
    }
}

export const GameItem: React.FC<IGameItemProps> = ({ game }) => {
    const testId = "Hide on bush";
    const { loading, data, error } = useFetch(`https://codingtest.op.gg/api/summoner/${testId}/matchDetail/${game.gameId}`);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>;

    const { teams } = data;

    const renderNoImg = (count: number) => {
        const result = [];
        for (let i = 0; i < count; i++) {
            result.push(<div key={i} className="Item w-7 m-0.5">
                <img src="https://opgg-static.akamaized.net/images/pattern/opacity.1.png" className="rounded-lg w-full" />
            </div>);
        }
        return result;
    };

    return (
        <div className={`flex flex-row w-full h-32 justify-between m-2 border ${game?.isWin ? 'bg-gameListBlueBg  border-gameListBlueBorder' : 'bg-gameListRedBg  border-gameListRedBorder'} text-soloRatingTextGray text-xs text-center`}>
            <div className="p-2 self-center" style={{ minWidth: "73px" }}>
                <div className="font-bold" title={game?.gameType}>
                    {game?.gameType}
                </div>
                <div className="TimeStamp">
                    <span>{timeSince(game?.createDate)}</span>
                </div>
                <div className="w-6 h-0.5 m-auto my-2 bg-soloRatingTextGray opacity-50"></div>
                <div className={`${game?.isWin ? 'text-gameWinBlue' : 'text-loseGraphBorder'} font-bold`}>
                    {game?.isWin ? '승리' : '패배'}
                </div>
                <div className="GameLength">{convertSeconds(game?.gameLength)}</div>
            </div>
            <div className="p-2 self-center flex flex-col min-w-max">
                <div className="flex flex-row">
                    <img src={game?.champion?.imageUrl} className="rounded-full w-12 h-12" alt={game?.summonerName} />
                    <div className="pl-1">
                        {game?.spells.map((spell, i) =>
                            <img key={i} src={spell.imageUrl} className="rounded-md w-6 h-6" />)}
                    </div>
                    <div className="pl-1">
                        {game?.peak.map((peakItem, i) =>
                            <img key={i} src={peakItem} className="rounded-md w-6 h-6" />)}
                    </div>
                </div>
                <div className="pt-2">
                    {game?.summonerName}
                </div>
            </div>
            <div className="p-1 self-center min-w-max">
                <div className="KDA text-sm pb-1">
                    <span className="Kill font-bold">{game?.stats.general.kill}</span> /
                    <span className="Death font-bold text-loseGraphBorder"> {game?.stats.general.death}</span> /
                    <span className="Assist font-bold"> {game?.stats.general.assist}</span>
                </div>
                <div className="KDARatio font-bold pb-1">
                    <span className="KDARatio text-gameTextBlack">{game?.stats.general.kdaString}</span> 평점
                </div>
                <div className="Badge p-1 text-white text-xs">
                    {game.stats.general.largestMultiKillString && <span className="bg-loseGraph border-loseGraphBorder border rounded-lg px-1 ml-1">{game.stats.general.largestMultiKillString}</span>}
                    {game.stats.general.opScoreBadge && <span className="bg-gameBadgeBg border-gameBadgeBorder border rounded-lg px-1 ml-1">{game.stats.general.opScoreBadge}</span>}
                </div>
            </div>
            <div className="p-2 self-center">
                <div className="Level">
                    레벨{game.champion.level}
                </div>
                <div className="CS">
                    <span className="CS">{game.stats.general.cs} ({game.stats.general.csPerMin})</span> CS
                </div>
                <div className="CKRate text-loseGraphBorder" title="">
                    킬관여 {game.stats.general.contributionForKillRate}
                </div>
                <div className="MMR">
                    <span>매치 평균</span>
                    <br />
                    <b className="text-gameTextBlack">Silver 3</b>
                </div>
            </div>
            <div className="p-2 self-center">
                <div className="grid grid-cols-4 min-w-max">
                    {game.items.map((item, i) =>
                        <Tooltip key={i} message="평점은 0~10점을 기준으로 경기에 기여한 정도에 따라 차등 부여되며 탈주 등 패배에 결정적인 영향을 끼친 경우 0점에 가까운 점수가 부여됩니다.">
                            <div className="Item w-7 m-0.5">
                                <img src={item.imageUrl} className="rounded-lg " />
                            </div>
                        </Tooltip>)}
                    {game.items.length < 7 && renderNoImg(7 - game.items.length)}
                    <button className="Button OpenBuildButton " title="" type="button">
                        <img src={game.isWin ? "//opgg-static.akamaized.net/css3/sprite/images/icon-buildblue-p.png" : "//opgg-static.akamaized.net/css3/sprite/images/icon-buildred-p.png"} />
                    </button>
                </div>
                <div className="Trinket flex flex-row justify-center m-1">
                    <img src="//opgg-static.akamaized.net/images/site/summoner/icon-ward-red.png" className="mr-1" />
                    <span className="wards vision">제어 와드 {game.stats.ward.visionWardsBought}</span></div>
            </div>
            <div className="p-2 self-center flex flex-row">
                {teams.map((team: { players: any[]; }, i: number) =>
                    <div key={i} className="Team flex flex-col">
                        {team.players.map((player, j) => <TeamPlayer key={j} player={player} />)}
                    </div>)}
            </div>
            <div className={`align-items-center w-10 border ${game?.isWin ? 'bg-gameListBlueMoreBg border-gameListBlueMoreBorder' : 'bg-gameListRedMoreBg  border-gameListRedMoreBorder'}`}>
                <i className={`border-solid inline-block border-r-2 border-b-2 transform rotate-45 p-1 mt-24 ${game?.isWin ? 'border-gameMoreBlue' : 'border-gameMoreRed'}`}></i>
            </div>
        </div>
    )
}