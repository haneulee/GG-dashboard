export type DateType = Date | string | number;

export type Summoner = {
  summoner: {
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

export type Position = {
  games: number;
  losses: number;
  position: string;
  positionName: string;
  wins: number;
};

export type Game = {
  gameId: number;
};
