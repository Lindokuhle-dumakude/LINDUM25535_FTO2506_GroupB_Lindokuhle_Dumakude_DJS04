// src/App.jsx

import { usePodcasts } from "./context/PodcastContext";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import GenreFilter from "./components/GenreFilter";
import SortSelect from "./components/SortSelect";
import Pagination from "./components/Pagination";
import PodcastGrid from "./components/PodcastGrid";
import Loading from "./components/Loading";
import ErrorMessage from "./components/ErrorMessage";
import "./index.css";
import "./App.css";

/**
 * Main application component.
 *
 * Handles rendering of the podcast app UI including:
 * - Header
 * - Search, filter, and sort controls
 * - Podcast grid
 * - Pagination
 * - Loading and error states
 *
 * Utilizes `usePodcasts` hook for accessing global podcast state.
 *
 * @returns {JSX.Element} The main app UI.
 */
export default function App() {
  const {
    loading,
    error,
    visiblePodcasts,
    totalPages,
    currentPage,
    setCurrentPage,
  } = usePodcasts();

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="app-container">
      <Header />

      <div className="controls">
        <SearchBar />
        <GenreFilter />
        <SortSelect />
      </div>

      <PodcastGrid podcasts={visiblePodcasts} />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}
