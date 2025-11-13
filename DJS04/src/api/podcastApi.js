// src/api/podcastApi.js
import { podcasts as localData } from "../data.js";

/**
 * Fetch podcast data from API or fallback to local data
 * @returns {Promise<Array>} array of podcast objects
 */
export async function fetchPodcasts() {
  const API_URL = "https://podcast-api.netlify.app";

  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Failed to fetch podcasts");

    const data = await response.json();
    return data;
  } catch (error) {
    console.warn(
      "⚠️ API fetch failed, using local data instead:",
      error.message
    );
    return localData;
  }
}
