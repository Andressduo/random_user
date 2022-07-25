import React from 'react'

const QuoteBox = ({user,color}) => {
  return (

    
    <article style={{color:`${color}`}} className="Container__card">
        <p className="Container__cite">
            <i className="fa-solid fa-quote-left"></i>
            <strong>Cite:</strong>{user.quote}
        </p>
        <div className="container__author">
        <h1><strong>Author:</strong>{user.author}</h1>
        </div>
    </article>
  )
}

export default QuoteBox