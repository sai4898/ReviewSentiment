
import React from 'react';

const ReviewList = ({ reviews }) => {
  return (
    <div>
      <h3>All Reviews</h3>
      {reviews.map((review, index) => (
        <div key={index} className='review-list'>
          <h4 className='review-list-h4'>{review.reviewer_name}</h4>
          <p className='review-list-p'>{review.content}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;