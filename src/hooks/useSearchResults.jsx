import { useEffect } from "react";
import getMainVideos from "../api/getMainVideos";
import { useDispatch } from "react-redux";
import { addSearchResults } from "../utils/searchSlice";

export const useSearchResults = (query) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchSearchResults = async () => {
      const searchResults = await getMainVideos(query);

      dispatch(addSearchResults(searchResults));
    };

    fetchSearchResults();
  }, [query, dispatch]);
};
