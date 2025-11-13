// src / components / PodcastCard.jsx
import "./PodcastCard.css";
import { formatDate } from "../utils/formatDate";

export default function PodcastCard({ podcast }) {
  return (
    <div className="podcast-card">
      <img src={podcast.image} alt={podcast.title} />
      <h3>{podcast.title}</h3>
      <p>{podcast.genre}</p>
      <small>Last updated: {formatDate(podcast.updated)}</small>
    </div>
  );
}
