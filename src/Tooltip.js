
import { useState } from 'react';
import reviews from './Data.json'; 

const Tooltip = () => {
 
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipContent, setTooltipContent] = useState('');

  const handleMouseOver = (content) => {
    setTooltipContent(content);
    setShowTooltip(true);
  };

  const handleMouseOut = () => {
    setShowTooltip(false);
  };

  return (
    <div className='tooltip'>
      {reviews.map((review, index) => (
        <div key={index}>
          <h3>{review.reviewer_name}</h3>
          {review.analytics.map((data, dataIndex) => (
            <div key={dataIndex}>
              {data.sentences.map((sentence, sentenceIndex) => (
                <p key={sentenceIndex} onMouseOver={() => handleMouseOver(data.topic)} onMouseOut={handleMouseOut}>
                  {sentence}
                </p>
              ))}
            </div>
          ))}
        </div>
      ))}
      {showTooltip && <Tooltip content={tooltipContent} />}
    </div>
  );
};

export default Tooltip