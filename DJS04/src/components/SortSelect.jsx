// src/components/SortSelect.jsx

import { usePodcasts } from "../context/PodcastContext";
import "../styles/SortSelect.css";

/**
 * Dropdown component for selecting the sorting method of podcasts.
 *
 * Connects to the global podcast state via `usePodcasts` context.
 *
 *
 * @component
 * @returns {JSX.Element} Sorting dropdown UI
 */
export default function SortSelect() {
  const { sortOrder, setSortOrder } = usePodcasts();

  /**
   * Handles change events on the sort dropdown.
   *
   *
   * @param {React.ChangeEvent<HTMLSelectElement>} e - The change event
   */
  const handleChange = (e) => {
    setSortOrder(e.target.value);
  };

  return (
    <div className="sort-select">
      <label className="sort-label">Sort by:</label>

      <select
        className="sort-dropdown"
        value={sortOrder}
        onChange={handleChange}
      >
        <option value="az">Title (A → Z)</option>
        <option value="za">Title (Z → A)</option>
        <option value="newest">Newest</option>
      </select>
    </div>
  );
}
