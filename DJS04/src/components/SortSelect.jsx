// src/components/SortSelect.jsx

import { usePodcasts } from "../context/PodcastContext";
import "../styles/SortSelect.css";

/**
 * Dropdown component for selecting the sorting method of podcasts.
 *
 * Connects to the global podcast state via `usePodcasts` context.
 * Dispatches a sort action whenever the selection changes.
 *
 * @component
 * @returns {JSX.Element} Sorting dropdown UI
 */
export default function SortSelect() {
  const { sort, dispatch } = usePodcasts();

  /**
   * Handles change events on the sort dropdown.
   * Dispatches an action to update the sort order in global state.
   *
   * @param {React.ChangeEvent<HTMLSelectElement>} e - The change event
   */
  const handleChange = (e) => {
    dispatch({ type: "SORT", payload: e.target.value });
  };

  return (
    <div className="sort-select">
      <label className="sort-label">Sort by:</label>

      <select className="sort-dropdown" value={sort} onChange={handleChange}>
        <option value="az">Title (A → Z)</option>
        <option value="za">Title (Z → A)</option>
        <option value="newest">Newest</option>
      </select>
    </div>
  );
}
