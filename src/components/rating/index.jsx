import { useState } from "react";
import ReactStars from "react-rating-stars-component";

export function Rating({val}) {
  const [rating, setRating] = useState(0)

  // Catch Rating value
  const ratingChanged = (rate) => {
    setRating(rate)

    // other logic
  }


  return (
    <ReactStars
    count={5}
    value={val}
    onChange={ratingChanged}
    size={24}
    activeColor="rgb(195 147 124)"
  />
  )
}