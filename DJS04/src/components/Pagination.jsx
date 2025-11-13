// src/components/Pagination.jsx

import { usePodcasts } from "../context/PodcastContext.jsx";
import "../styles/Pagination.css";

/**
 * Pagination component for navigating through paged podcast results.
 *
 * Uses the global podcast context to read and update the current page.
 * Dispatches "PAGE" actions to the reducer to change state.
 *
 * @component
 * @example
 * return (
 *   <Pagination />
 * )
 *
 * @returns {JSX.Element} The pagination controls with Prev/Next buttons.
 */
export default function Pagination() {
  const { page, dispatch } = usePodcasts();

  /**
   * Go to the previous page if not already on the first page.
   * @function
   */
  const handlePrev = () => {
    if (page > 1) dispatch({ type: "PAGE", payload: page - 1 });
  };

  /**
   * Go to the next page.
   * @function
   */
  const handleNext = () => {
    dispatch({ type: "PAGE", payload: page + 1 });
  };

  return (
    <div className="pagination">
      <button onClick={handlePrev} disabled={page === 1}>
        ← Prev
      </button>
      <span>Page {page}</span>
      <button onClick={handleNext}>Next →</button>
    </div>
  );
}
