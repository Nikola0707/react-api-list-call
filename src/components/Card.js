import React from 'react'
import './style/card.css'

const Card = (props) => {
   
   return (
      <div className="cardDiv">
         <div className="divTitle"><p  className="cardTitle">{props.title}</p></div>
         <hr />
         <p className="cardParagraph">{props.body}</p>
      </div>
   )
}

export default Card