import { Link } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";
import PropTypes from 'prop-types';

const Book = ({book}) => {
  const {bookName, author, image, category, bookId, rating, tags} = book
  return (
    <Link to={`/book/${bookId}`}>
    <div className="p-5 border-2 rounded-xl space-y-2 mt-9">
      <img className="w-48 mx-auto bg-gray-200 p-11" src={image} alt="" />
      <p className="text-xl text-green-600">{tags}</p>
      <h2 className="text-3xl font-bold">{bookName}</h2>
      <h2 className="text-xl">{author}</h2>
      <div className="flex justify-between text-xl">
      <h2 className="text-xl text-green-600">{category}</h2>
      <p className="flex gap-2">{rating}<span><FaRegStar className="text-orange-500"></FaRegStar></span></p>
      </div>
    </div>
    </Link>
  );
};

Book.propTypes={
  book: PropTypes.object
}

export default Book;