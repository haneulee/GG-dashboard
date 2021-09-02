export type DateType = Date | string | number;

export type Summoner = {
  name: string;
  level: number;
  ladderRank: {
    rank: number;
    rankPercentOfTop: number;
  };
  profileImageUrl: string;
  profileBorderImageUrl: string;
  leagues: League[];
};

export type League = {
  wins: number;
  losses: number;
  tierRank: {
    division: string;
    imageUrl: string;
    lp: number;
    name: string;
    shortString: string;
    string: string;
    tier: string;
    tierDivision: string;
    tierRankPoint: number;
  };
};

export type Summary = {
  kills: number;
  assists: number;
  deaths: number;
  wins: number;
  losses: number;
};

export type Champion = {
  assists: number;
  deaths: number;
  games: number;
  id: number;
  imageUrl: string;
  key: string;
  kills: number;
  losses: number;
  name: string;
  wins: number;
};

export type ChampionStats = {
  name: string;
  cs: number;
  rank: number;
  imageUrl: string;
  games: number;
  kills: number;
  assists: number;
  deaths: number;
  wins: number;
};

export type RecentWin = {
  imageUrl: string;
  name: string;
  losses: number;
  wins: number;
};

export type Position = {
  games: number;
  losses: number;
  position: string;
  positionName: string;
  wins: number;
};

export type Game = {
  gameId: number;
  champion: {
    imageUrl: string;
    level: number;
  };
  createDate: number;
  gameId: string;
  gameLength: number;
  gameType: string;
  isWin: false;
  items: ITEM[];
  mapInfo: null;
  mmr: number;
  needRenew: false;
  peak: [string];
  spells: SPELL[];
  stats: STAT;
  summonerId: string;
  summonerName: string;
  tierRankShort: string;
  teams: TEAM[];
};

export type STAT = {
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
  };
  ward: {
    sightWardsBought: number;
    visionWardsBought: number;
  };
};

export type ITEM = {
  imageUrl: string;
};

export type SPELL = {
  imageUrl: string;
};

export type TEAM = {
  players: PLAYER[];
};

export type PLAYER = {
  champion: {
    imageUrl: string;
    level: number;
  };
  summonerId: string;
  summonerName: string;
};
