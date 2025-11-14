// src/components/SortSelect.jsx

import { usePodcasts } from "../context/PodcastContext";
import "../styles/SortSelect.css";

/**
 * SortSelect component provides a dropdown menu
 * for selecting the sort order of podcasts. It reads
 * and updates the global sort order stored in the PodcastContext.
 *
 * @component
 * @returns {JSX.Element} A dropdown allowing users to sort podcasts.
 */
export default function SortSelect() {
  const { sortOrder, setSortOrder } = usePodcasts();

  /**
   * Handles changes to the sort dropdown by updating
   * the global sort order in context.
   *
   * @param {React.ChangeEvent<HTMLSelectElement>} e - The select change event.
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
