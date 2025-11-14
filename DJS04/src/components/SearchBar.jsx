// src/components/SearchBar.jsx

import { usePodcasts } from "../context/PodcastContext";
import "../styles/SearchBar.css";

/**
 * SearchBar component provides a controlled input field
 * for filtering podcast content. It reads and updates the
 * global search term stored in the PodcastContext.
 *
 * @component
 * @returns {JSX.Element} A search bar allowing users to filter podcasts.
 */
export default function SearchBar() {
  const { searchTerm, setSearchTerm } = usePodcasts();

  /**
   * Handles input changes by updating the global search term.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e - The input change event.
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
