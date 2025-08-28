
import { useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const DetailsPage = () => {
    const { bookId } = useParams()

    const data = useLoaderData()
    const id = parseInt(bookId)
    const book = data.find(boo => boo.bookId === id)

    const [ added,setAdded ] = useState([])
   
    const AddHandel = (book) =>{
       setAdded(prev=>[...prev,book])
    }
    

  return (
    <div className='flex justify-between'>
      {
        <div className="hero bg-base-200 min-h-screen w-4/6">
            <div className="hero-content flex-col lg:flex-row">
                <img
                    src={book.image}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button onClick={()=>AddHandel(book)} className="btn btn-primary mr-4">Read</button>
                    <button className="btn btn-primary">wishllist</button>
                </div>
            </div>
        </div>
        
      }
      <div className='w-2/6 ml-2 border-1'>
          
         {
            added.map((b,i)=>(
                <img
                key={i}
                 src={b.image}
                />
            ))
         }
      </div>
    </div>
  )
}

export default DetailsPage