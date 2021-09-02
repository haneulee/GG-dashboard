import useSWR from "swr";
import constants from "src/constants";
import { fetchData } from "src/util/APIUtil";
import options from "src/swr.config.json";

function useSummoner(summonerId: string) {
  const { data, error } = useSWR(
    `${constants.API_ENDPOINT}/summoner/${summonerId}`,
    fetchData,
    options
  );

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default useSummoner;
