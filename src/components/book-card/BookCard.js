import React from "react";

import "./book-card.style.css";

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <div className="card">
        <div className="card-image">
          <img
            className="card-img"
            src={book.volumeInfo.imageLinks.thumbnail}
            alt=""
          />
        </div>
        <div className="info">
          <h3 className="book-title">
            {book.volumeInfo.title.slice(0, 15)}...
          </h3>
          <h3 className="authors">
            {" "}
            Author:{" "}
            {book.volumeInfo.authors ? (
              book.volumeInfo.authors.toString().slice(0, 15)
            ) : (
              <div className="empty-value"></div>
            )}
            ...
          </h3>
          <h4 className="published">
            {" "}
            Published:{" "}
            {book.volumeInfo.publishedDate === "0000"
              ? "..."
              : book.volumeInfo.publishedDate.substring(0, 4)}
          </h4>
          <button className="link">
            {" "}
            <a href={book.volumeInfo.infoLink} target="blank">
              More
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
