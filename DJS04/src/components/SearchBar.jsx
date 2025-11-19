// src/components/SearchBar.jsx

import { usePodcasts } from "../context/PodcastContext";
import "../styles/SearchBar.css";

/**
 * SearchBar component for filtering podcasts by search term.
 *
 * Connects to the global podcast state via `usePodcasts` context.
 * Updates the global search value whenever the user types in the input.
 *
 * @component
 * @returns {JSX.Element} Search input UI
 */
export default function SearchBar() {
  const { searchTerm, setSearchTerm } = usePodcasts();

  /**
   * Handles input change events.
   *
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e - The input change event
   */
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search podcasts..."
        value={searchTerm}
        onChange={handleChange}
        className="search-input"
      />
    </div>
  );
}
