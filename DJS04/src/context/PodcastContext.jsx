// src/context/PodcastContext.jsx
import { createContext, useContext, useReducer, useEffect } from "react";
import { fetchPodcasts } from "../api/podcastApi.js";

/**
 * Global context for managing podcast-related state across the application.
 * @type {React.Context}
 */
const PodcastContext = createContext();

/**
 * Initial state for the podcast context.
 * @typedef {Object} PodcastState
 * @property {Array} podcasts - List of fetched podcast objects.
 * @property {boolean} loading - Indicates if data is currently loading.
 * @property {string|null} error - Error message if fetch fails.
 * @property {string} search - Current search query.
 * @property {string} genre - Selected genre filter.
 * @property {string} sort - Current sorting method.
 * @property {number} page - Current pagination page.
 * @property {number} perPage - Number of podcasts per page.
 */
const initialState = {
  podcasts: [],
  loading: true,
  error: null,
  search: "",
  genre: "All",
  sort: "title",
  page: 1,
  perPage: 6,
};

/**
 * Reducer to handle podcast-related state updates.
 * @param {PodcastState} state - Current state.
 * @param {{type: string, payload?: any}} action - Action with a type and optional payload.
 * @returns {PodcastState} New updated state.
 */
function reducer(state, action) {
  switch (action.type) {
    case "LOAD_SUCCESS":
      return { ...state, podcasts: action.payload, loading: false };
    case "ERROR":
      return { ...state, error: action.payload, loading: false };
    case "SEARCH":
      return { ...state, search: action.payload };
    case "FILTER_GENRE":
      return { ...state, genre: action.payload };
    case "SORT":
      return { ...state, sort: action.payload };
    case "PAGE":
      return { ...state, page: action.payload };
    default:
      return state;
  }
}

/**
 * Context provider component that supplies podcast state and actions.
 * Fetches podcast data on mount and exposes state + dispatch.
 *
 * @component
 * @param {{children: React.ReactNode}} props - The nested child components.
 * @returns {JSX.Element} Context provider wrapping its children.
 */
export const PodcastProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchPodcasts();
        dispatch({ type: "LOAD_SUCCESS", payload: data });
      } catch (error) {
        dispatch({ type: "ERROR", payload: error.message });
      }
    };

    loadData();
  }, []);

  return (
    <PodcastContext.Provider value={{ state, dispatch }}>
      {children}
    </PodcastContext.Provider>
  );
};
