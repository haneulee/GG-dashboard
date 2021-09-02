import useSWR from "swr";
import constants from "src/constants";
import { fetchData } from "src/util/APIUtil";
import options from "src/swr.config.json";


function useMatchDetail(summonerId: string, gameId: string) {
    const { data, error } = useSWR(`${constants.API_ENDPOINT}/summoner/${summonerId}/matchDetail/${gameId}`, fetchData, options);

    return {
        data: data,
        isLoading: !error && !data,
        isError: error
    }
}

export default useMatchDetail;