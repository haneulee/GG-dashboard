const API_ENDPOINT =
    'https://codingtest.op.gg/api';

const statusErrorFromResponse = (res: any) => {
    if (res.status < 300) return false;

    if (res.status < 400) {
        return `Redirects Error with status code ${res.status}`;
    }
    if (res.status < 500) {
        return `Client Error with status code ${res.status}`;
    }
    if (res.status < 600) {
        return `Server Error with status code ${res.status}`;
    }
};

const fetchData = async (url: string) => {
    try {
        const res = await fetch(url);

        const statusErrorMessage = statusErrorFromResponse(res);
        if (statusErrorMessage) throw new Error(statusErrorMessage);

        return res.json();
    } catch (e: any) {
        throw new Error(e);
    }
};

const api = {
    fetchSummoner: (keyword: string) => fetchData(`${API_ENDPOINT}/summoner/${keyword}`),
    fetchMostInfo: (summonerId: string) => fetchData(`${API_ENDPOINT}/summoner/${summonerId}/mostInfo`),
    fetchMatches: (summonerId: string) => fetchData(`${API_ENDPOINT}/summoner/${summonerId}/matches`),
    fetchMatchDetail: (summonerId: string, gameId: string) => fetchData(`${API_ENDPOINT}/summoner/${summonerId}/matchDetail/${gameId}`),
};

export default api;