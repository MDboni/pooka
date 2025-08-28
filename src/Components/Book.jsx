import { Link } from "react-router-dom"

const Book = ({book}) => {
    const {image,tags,bookName,author,bookId} = book
  return (
    <Link to={`/detail/${bookId}`}>
       <div className="card bg-base-100  shadow-sm mx-auto">
            <figure className="bg-gray-200 ">
                <img
                className=""
                src={image}
                alt="Shoes" />
            </figure>
            <div className="card-body">
                <div className="flex">
                   {
                    tags.map((tag,i) => <p key={i} className="text-green-600">#{tag}</p>)
                   }
                </div>
                <h2 className="card-title">Card Title</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </Link>
  )
}

export default Book