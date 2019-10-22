import React from 'react'

function DisplayQuotes({simpsonquote}) {
    return (
        <div className="DisplayQuotes">
            <img
                src={simpsonquote.image}
                alt={simpsonquote.character}
            />
        <p>Quote: {simpsonquote.quote}{" "}</p>
        <p>Name: {simpsonquote.character}{" "}</p>
        </div>
    )    
}

export default DisplayQuotes;