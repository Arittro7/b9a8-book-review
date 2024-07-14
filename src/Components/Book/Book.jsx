
const Book = ({book}) => {
  const {bookName, author, image, category, bookId, rating, tags} = book
  return (
    <div className="p-3 border-2 rounded-xl">
      <img className="w-48 mx-auto bg-gray-200 p-11" src={image} alt="" />
      <p className="text-xl text-green-600">{tags}</p>
      <h2 className="text-2xl">{bookName}</h2>
      <h2>{author}</h2>
      <div>
      <h2>{category}</h2>
      <p>{rating}</p>
      </div>
    </div>
  );
};

export default Book;