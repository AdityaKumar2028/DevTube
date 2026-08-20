import { useEffect } from "react";
import getSearchSuggestions from "../api/getSearchSuggestions";
import { useDispatch, useSelector } from "react-redux";
import { cacheSearchResult } from "../utils/searchSlice";
import { debounce_timer } from "../utils/Constants";

export const useSearchSuggestions = (query) => {
  const searchSuggestions = useSelector(
    (store) => store.search.searchSuggestions,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (searchSuggestions[query]) return;

    const fetchSearchSuggestions = async () => {
      try {
        const result = await getSearchSuggestions(query);
        dispatch(cacheSearchResult({ [query]: result }));
      } catch (error) {
        console.error(error);
      }
    };

    const timer = setTimeout(() => fetchSearchSuggestions(), debounce_timer);

    return () => clearTimeout(timer);
  }, [dispatch, query, searchSuggestions]);
};
