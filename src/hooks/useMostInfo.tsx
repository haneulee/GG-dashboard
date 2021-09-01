import useSWR from "swr";
import constants from "src/constants";
import { fetchData } from "src/util/APIUtil";


function useMostInfo(summonerId: string) {
    const { data, error } = useSWR(`${constants.API_ENDPOINT}/summoner/${summonerId}/mostInfo`, fetchData, { suspense: true });

    return {
        data: data,
        isLoading: !error && !data,
        isError: error
    }
}

export default useMostInfo;