// src/components/GenreFilter.jsx

import { usePodcasts } from "../context/PodcastContext";
import { genres } from "../utils/data";
import "../styles/GenreFilter.css";

/**
 * Dropdown component for filtering podcasts by genre.
 *
 * Connects to the global podcast state via `usePodcasts` context.
 * Updates the current genre selection in the global state when changed.
 *
 * @component
 * @returns {JSX.Element} Genre filter dropdown UI
 */
export default function GenreFilter() {
  const { genre, dispatch } = usePodcasts();

  /**
   * Handles the change event on the genre dropdown.
   * Dispatches an action to update the selected genre in global state.
   *
   * @param {React.ChangeEvent<HTMLSelectElement>} e - The change event
   */
  const handleChange = (e) => {
    dispatch({ type: "FILTER_GENRE", payload: Number(e.target.value) });
  };

  return (
    <div className="genre-filter">
      <label className="genre-label">Filter by Genre:</label>

      <select className="genre-select" value={genre} onChange={handleChange}>
        <option value="All">All</option>
        {genres.map((g) => (
          <option key={g.id} value={g.id}>
            {g.title}
          </option>
        ))}
      </select>
    </div>
  );
}
