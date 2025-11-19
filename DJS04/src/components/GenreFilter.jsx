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
  const { selectedGenres, setSelectedGenres } = usePodcasts();

  /**
   * Handles the change event on the genre dropdown.
   * Updates global genre filter
   *
   * @param {React.ChangeEvent<HTMLSelectElement>} e - The change event
   */
  const handleChange = (e) => {
    const val = e.target.value;

    if (val === "All") {
      setSelectedGenres([]);
    } else {
      setSelectedGenres([Number(val)]);
    }
  };

  const selectedValue = selectedGenres.length > 0 ? selectedGenres[0] : "All";

  return (
    <div className="genre-filter">
      <label className="genre-label">Filter by Genre:</label>

      <select
        className="genre-select"
        value={selectedValue}
        onChange={handleChange}
      >
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
