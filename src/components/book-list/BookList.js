import React from "react";

import BookCard from "../book-card/BookCard";

import image from "../../assets/image.png";

import "./book-list.style.css";

const BookList = ({ books }) => {
  return (
    <div className="book-list">
      {books.length > 0 ? (
        books.map((book, id) => {
          return <BookCard key={id} book={book} />;
        })
      ) : (
        <div className="empty">
          <img className="image" src={image} alt="" />
        </div>
      )}
    </div>
  );
};

export default BookList;
