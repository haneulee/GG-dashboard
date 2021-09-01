import useSWR from "swr";
import constants from "src/constants";
import { fetchData } from "src/util/APIUtil";


function useMatches(summonerId: string) {
    const { data, error } = useSWR(`${constants.API_ENDPOINT}/summoner/${summonerId}/matches`, fetchData, { suspense: true });

    return {
        data: data,
        isLoading: !error && !data,
        isError: error
    }
}

export default useMatches;