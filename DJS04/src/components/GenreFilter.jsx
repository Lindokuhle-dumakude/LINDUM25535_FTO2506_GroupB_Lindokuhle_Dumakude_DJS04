// src/components/GenreFilter.jsx

import { usePodcasts } from "../context/PodcastContext";
import { genres } from "../utils/data";
import "../styles/GenreFilter.css";

/**
 * GenreFilter component provides a multi-select dropdown
 * for filtering podcasts by genre. It reads and updates
 * the selected genres in the global PodcastContext.
 *
 * @component
 * @returns {JSX.Element} A multi-select dropdown for filtering podcasts by genre.
 */
export default function GenreFilter() {
  const { selectedGenres, setSelectedGenres } = usePodcasts();

  /**
   * Handles changes to the genre dropdown by adding or removing
   * the selected genre from the context state.
   *
   * @param {React.ChangeEvent<HTMLSelectElement>} e - The select change event.
   */
  function handleChange(e) {
    const value = Number(e.target.value);

    // Remove genre if already selected
    if (selectedGenres.includes(value)) {
      setSelectedGenres(selectedGenres.filter((g) => g !== value));
    } else {
      // Add genre if not selected
      setSelectedGenres([...selectedGenres, value]);
    }
  }

  return (
    <div className="genre-filter">
      <label className="genre-label">Filter by Genre:</label>

      <select
        className="genre-select"
        multiple
        value={selectedGenres}
        onChange={handleChange}
      >
        {genres.map((g) => (
          <option key={g.id} value={g.id}>
            {g.title}
          </option>
        ))}
      </select>
    </div>
  );
}
