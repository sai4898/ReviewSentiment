import React from 'react';

const ReviewHighlighter = ({ reviews }) => {
  const getColor = (sentiment) => {
    switch (sentiment) {
      case 'Positive':
        return '#6ed56d'; // Green
      case 'Negative':
        return '#f55f5f'; // Red
      case 'Neutral':
        return '#65b2ff'; // Blue
      default:
        return 'black';
    }
  };

  return (
    <div>
      {reviews.map((review, index) => (
        <div key={index}>
          <h4>{review.reviewer_name}</h4>
          {review.analytics.map((data, dataIndex) => (
            <div key={dataIndex}>
              <p>Sentiment: {data.sentiment}</p>
              {data.sentences.map((sentence, sentenceIndex) => (
                <p key={sentenceIndex} style={{ color: getColor(data.sentiment) }}>
                  {sentence}
                </p>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};



export default ReviewHighlighter