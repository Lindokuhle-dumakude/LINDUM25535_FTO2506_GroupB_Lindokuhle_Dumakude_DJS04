// src/components/SortSelect.jsx

import { usePodcasts } from "../context/PodcastContext.jsx";
import "../styles/SortSelect.css";

/**
 * SortSelect component for sorting podcast results.
 *
 * Provides a dropdown menu allowing users to sort podcasts
 * alphabetically (A–Z or Z–A) or by newest release.
 *
 * @component
 * @example
 * return (
 *   <SortSelect />
 * )
 *
 * @returns {JSX.Element} Controlled <select> element for sort order.
 */
export default function SortSelect() {
  const { sort, dispatch } = usePodcasts();

  /**
   * Handle change in selected sort option.
   * Dispatches a SORT action to update global state.
   *
   * @param {React.ChangeEvent<HTMLSelectElement>} e - The change event.
   */
  const handleChange = (e) => {
    dispatch({ type: "SORT", payload: e.target.value });
  };

  return (
    <select className="sort-select" value={sort} onChange={handleChange}>
      <option value="title-asc">Title (A-Z)</option>
      <option value="title-desc">Title (Z-A)</option>
      <option value="newest">Newest</option>
    </select>
  );
}
