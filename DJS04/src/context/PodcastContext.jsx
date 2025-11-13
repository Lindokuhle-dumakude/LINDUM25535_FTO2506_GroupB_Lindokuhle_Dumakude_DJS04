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
