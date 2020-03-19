import React from 'react'

const Rating = (props) => {
    const {count,onChangeRating= () => {}}=props
    let starsHtml = []
    for(let i = 0; i < 5; i++) {
        if(i < count) {
            starsHtml.push(<span key={i}><i class="fas fa-star star-gold" onClick={() => onChangeRating(i+1)} ></i></span>)
        }
        else {
            starsHtml.push(<span  key={i}><i class="far fa-star" onClick={() => onChangeRating(i+1)}></i></span>)
        }
    }
    return (
        <div>{starsHtml}</div>
    )
}

export default Rating