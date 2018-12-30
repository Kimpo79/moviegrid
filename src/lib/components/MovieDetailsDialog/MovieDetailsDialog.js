import React from 'react'
import ModalDialog from 'react-modal'
import {
  MOVIE_POSTER_BASE_PATH,
  CAST_MEMBER_PHOTO_BASE_PATH
} from '../../config'

export default function MovieDetailsDialog({
  selectedMovie,
  showModal,
  handleCloseModal
}) {
  return (
    <ModalDialog
      isOpen={showModal}
      contentLabel="onRequestClose Example"
      onRequestClose={handleCloseModal}
      className="movie-details-dialog"
      overlayClassName="overlay"
      ariaHideApp={false}
    >
      {selectedMovie.details.title && (
        <h2 className="title">{selectedMovie.details.title}</h2>
      )}

      <div className="dialog-flexbox">
        <div>
          {selectedMovie.details.poster_path ? (
            <img
              src={MOVIE_POSTER_BASE_PATH + selectedMovie.details.poster_path}
              alt={selectedMovie.details.title}
              className="movie-poster"
            />
          ) : (
            <div className="fallback-placeholder">
              {selectedMovie.details.title}
            </div>
          )}
        </div>
        <ul className="details-list">
          <li className="rating">
            {selectedMovie.details.vote_average && (
              <span>Score: {selectedMovie.details.vote_average}</span>
            )}
          </li>
          <li className="release-date">
            {selectedMovie.details.release_date && (
              <span>Release date: {selectedMovie.details.release_date}</span>
            )}
          </li>
          <li className="homepage">
            {selectedMovie.details.homepage && (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={selectedMovie.details.homepage}
              >
                Visit homepage
              </a>
            )}
          </li>
          <li className="genres">
            {selectedMovie.details.genres &&
              selectedMovie.details.genres.map((genre, i) => (
                <span key={i} className="genre-label">
                  {genre.name}
                </span>
              ))}
          </li>
        </ul>
      </div>
      <p>{selectedMovie.details.overview}</p>
      <div className="cast-grid">
        {selectedMovie.cast &&
          selectedMovie.cast.map((castMember, i) => {
            return (
              <div key={i} className="item">
                {castMember.profile_path ? (
                  <img
                    src={CAST_MEMBER_PHOTO_BASE_PATH + castMember.profile_path}
                    alt={castMember.name}
                    className="cast-profile-picture"
                  />
                ) : (
                  <div className="fallback-placeholder small" />
                )}
                <span>{castMember.name}</span>
              </div>
            )
          })}
      </div>

      <button className="close-button" onClick={handleCloseModal}>
        X
      </button>
    </ModalDialog>
  )
}
