import React ,{useEffect, useState} from "react";
import {CloseIcon,Button2,Form,Label,TextArea,RatingContainer,StarIcon, Button, Input,ReviewHeader2} from "./style.js";

const ReviewForm = ({ onSubmit,onClose }) => {
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState(0);
  
    const handleSubmit = (event) => {

    
      event.preventDefault();
  
      if (!name || !comment || !rating) {
        return;
      }
  
      onSubmit({ name, comment, rating });
    };
  
    const handleNameChange = (event) => {
      setName(event.target.value);
    };
  
    const handleCommentChange = (event) => {
      setComment(event.target.value);
    };
  
    const handleRatingChange = (newRating) => {
      setRating(newRating);
    };
  
    return (
      <Form onSubmit={handleSubmit}>
        <CloseIcon onClick={onClose}><i class="fa fa-window-close" aria-hidden="true"></i></CloseIcon>
        <ReviewHeader2><i className="fa fa-comments"></i> Make your Review now</ReviewHeader2>
        <br/>
        <Label htmlFor="comment">Comment</Label><br/>
        <TextArea id="comment" value={comment} onChange={handleCommentChange} required/>
        <br/><br/><br/><br/>
        
        <RatingContainer>
        <Label>Rating : </Label> 
          {[1, 2, 3, 4, 5].map((value) => (
            <StarIcon
              key={value}
              isActive={value <= rating}
              onClick={() => handleRatingChange(value)}
              required>
              ★
            </StarIcon>
          ))}
          <br/><br/>
        </RatingContainer>
  
        <Button2 type="submit">Submit</Button2>
      </Form>
    );
  };
    export default ReviewForm;