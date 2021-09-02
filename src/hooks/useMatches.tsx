import useSWR from "swr";
import constants from "src/constants";
import { fetchData } from "src/util/APIUtil";
import options from "src/swr.config.json";


function useMatches(summonerId: string) {
    const { data, error } = useSWR(`${constants.API_ENDPOINT}/summoner/${summonerId}/matches`, fetchData, options);

    return {
        data: data,
        isLoading: !error && !data,
        isError: error
    }
}

export default useMatches;