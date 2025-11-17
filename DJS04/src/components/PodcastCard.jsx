// src/components/PodcastCard.jsx

import "../styles/PodcastCard.css";
import { genres } from "../utils/data";
import { formatDate } from "../utils/formatDate";

/**
 * PodcastCard component displays a single podcast preview.
 *
 * Shows the podcast image, title, genres, and last updated date.
 * Optionally triggers an `onSelect` callback when clicked.
 *
 * @component
 * @param {Object} props
 * @param {Object} props.podcast - Podcast data object
 * @param {string} props.podcast.title - Podcast title
 * @param {string} props.podcast.image - URL of podcast image
 * @param {Array<number>} props.podcast.genres - Array of genre IDs
 * @param {string} props.podcast.updated - Last updated date string
 * @param {Function} [props.onSelect] - Optional callback triggered on click
 * @returns {JSX.Element} A card displaying podcast info
 */
export default function PodcastCard({ podcast, onSelect }) {
  const genreName =
    podcast.genres
      ?.map((id) => genres.find((g) => g.id === id)?.title)
      .filter(Boolean)
      .join(", ") || "Unknown Genre";

  const formattedDate = formatDate(podcast.updated);

  return (
    <div className="podcast-card" onClick={() => onSelect && onSelect(podcast)}>
      <img
        className="podcast-card-image"
        src={podcast.image}
        alt={podcast.title}
      />

      <div className="podcast-card-content">
        <h3 className="podcast-card-title">{podcast.title}</h3>
        <p className="podcast-card-genre">{genreName}</p>
        <small className="podcast-card-updated">Updated: {formattedDate}</small>
      </div>
    </div>
  );
}
