import React, { useRef, useState } from 'react';
import '../Reviews.css'; // Refer to the CSS file below
import star from '../assets/images/Group 36.png'
import shape1 from '../assets/images/shape (1).png'
import shape2 from '../assets/images/shape (2).png'
const reviews = [
  {
    rating: 5,
    text: "Lorem Ipsum is simply dummy text",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type specimen book.",
    name: "Alice",
    date: "12 May 2024",
  },
  {
    rating: 5,
    text: "Lorem Ipsum is simply dummy text",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type specimen book.",
    name: "Bob",
    date: "12 May 2024",
  },
  {
    rating: 5,
    text: "Lorem Ipsum is simply dummy text",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type specimen book.",
    name: "Charlie",
    date: "12 May 2024",
  },
  {
    rating: 5,
    text: "Lorem Ipsum is simply dummy text",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type specimen book.",
    name: "Diana",
    date: "12 May 2024",
  },
  {
    rating: 5,
    text: "Lorem Ipsum is simply dummy text",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type specimen book.",
    name: "Diana",
    date: "12 May 2024",
  },
  {
    rating: 5,
    text: "Lorem Ipsum is simply dummy text",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type specimen book.",
    name: "Diana",
    date: "12 May 2024",
  }

];

const ReviewCard = ({ rating, text, description, name, date }) => (
  <div className="review-card">
    <div className='review-cardin'>
    <div className="stars">

            <img src={star}></img>
            <img src={star}></img>
            <img src={star}></img>
            <img src={star}></img>
            <img src={star}></img>
        
      </div>
    <h4>{text}</h4>
    <p>{description}</p>
    </div>
   
    <p className="review-author">
      {name} ({date})
    </p>
  </div>
);

const Reviews = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    if (isDragging) setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust multiplier for speed
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };
  const scrollLeftHandler = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' }); // Adjust the amount as needed
  };

  const scrollRightHandler = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };
  return ( 
  <div className="reviews-container">
    <p className="recommendation">Highly-recommended</p>
    <h2>It's No Wonder You Love Setterox.</h2>
    <div className="overall-rating"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span> </div>
    <div className="reviews-list"  ref={scrollRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove} >
      {reviews.map((review, index) => (
        <ReviewCard key={index} {...review} />
      ))}
    </div>
    <div className="navigation1">
      <button className="nav-btn"  onClick={scrollLeftHandler}><img src={shape2}></img></button>
      <button className="nav-btn" onClick={scrollRightHandler}><img src={shape1}></img></button>
    </div>
  </div>)
}

export default Reviews;
