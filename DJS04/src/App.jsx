// React imports
import { PodcastProvider } from "./context/PodcastContext.jsx";

// Components
import Header from "./components/Header.jsx";
import SearchBar from "./components/SearchBar.jsx";
import SortSelect from "./components/SortSelect.jsx";
import GenreFilter from "./components/GenreFilter.jsx";
import PodcastGrid from "./components/PodcastGrid.jsx";
import Pagination from "./components/Pagination.jsx";
import Loading from "./components/Loading.jsx";
import ErrorMessage from "./components/ErrorMessage.jsx";

// Styles
import "./index.css";

/**
 * - Wraps the UI with PodcastProvider so all components share state
 * - Displays search, sort, filter, podcasts, and pagination
 */
export default function App() {
  return (
    <PodcastProvider>
      <div className="app-container">
        <Header />
        <main>
          <div className="controls">
            <SearchBar />
            <SortSelect />
            <GenreFilter />
          </div>
          <ErrorMessage />
          <Loading />
          <PodcastGrid />
          <Pagination />
        </main>
      </div>
    </PodcastProvider>
  );
}
