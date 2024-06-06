import { useState } from "react";
import ReactStars from "react-rating-stars-component";

export function Rating({val,isResponsive,count=5,onChange=() =>{},edit=false,activeColor="rgb(195 147 124)",size=24}) {
  const [rating, setRating] = useState(0)

  // Catch Rating value
  const ratingChanged = (rate) => {
    setRating(rate);
    onChange(rate);
    // other logic
  }


  return (
    <ReactStars
    count={count}
    value={val}
    onChange={ratingChanged}
    size={isResponsive? 16 : size}
    activeColor={activeColor}
    edit={edit}
  />
  )
}