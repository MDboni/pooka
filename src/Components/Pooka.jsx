import { useEffect, useState } from "react"
import Book from "./Book"

const Pooka = () => {
    const [pooka,setPooka] = useState([])

    useEffect(()=>{
        fetch('booksData.json')
        .then(res=>res.json())
        .then(data=>setPooka(data))
    },[])

  return (
    <div>
        <h2 className="text-center text-xl font-bold">Books</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {
                pooka.map(book => <Book key={book.bookId} book={book}></Book>)
            }
        </div>
    </div>
  )
}

export default Pooka