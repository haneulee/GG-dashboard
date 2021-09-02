import constants from "src/constants";

export const fetchData = async (url: string) => {
  const res = await fetch(url);
  return res.json();
};

const api = {
  fetchSummoner: (keyword: string) =>
    fetchData(`${constants.API_ENDPOINT}/summoner/${keyword}`),
  fetchMostInfo: (summonerId: string) =>
    fetchData(`${constants.API_ENDPOINT}/summoner/${summonerId}/mostInfo`),
  fetchMatches: (summonerId: string) =>
    fetchData(`${constants.API_ENDPOINT}/summoner/${summonerId}/matches`),
  fetchMatchDetail: (summonerId: string, gameId: string) =>
    fetchData(
      `${constants.API_ENDPOINT}/summoner/${summonerId}/matchDetail/${gameId}`
    ),
};

export default api;
