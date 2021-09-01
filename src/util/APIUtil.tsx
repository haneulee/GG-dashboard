import constants from "src/constants";


const statusErrorFromResponse = (res: Response) => {
    if (res.status < constants.ERROR_REDIRECT) {
        return '';
    } else if (res.status < constants.ERROR_CLIENT) {
        return `Redirects Error with status code ${res.status}`;
    } else if (res.status < constants.ERROR_SERVER) {
        return `Client Error with status code ${res.status}`;
    } else if (res.status < constants.ERROR_REST) {
        return `Server Error with status code ${res.status}`;
    }

    return '';
};

export const fetchData = async (url: string) => {
    try {
        const res = await fetch(url);

        const statusErrorMessage = statusErrorFromResponse(res);
        if (statusErrorMessage) {
            throw new Error(statusErrorMessage);
        }

        return res.json();
    } catch (e: any) {
        throw new Error(e);
    }
};

const api = {
    fetchSummoner: (keyword: string) => fetchData(`${constants.API_ENDPOINT}/summoner/${keyword}`),
    fetchMostInfo: (summonerId: string) => fetchData(`${constants.API_ENDPOINT}/summoner/${summonerId}/mostInfo`),
    fetchMatches: (summonerId: string) => fetchData(`${constants.API_ENDPOINT}/summoner/${summonerId}/matches`),
    fetchMatchDetail: (summonerId: string, gameId: string) => fetchData(`${constants.API_ENDPOINT}/summoner/${summonerId}/matchDetail/${gameId}`),
};

export default api;