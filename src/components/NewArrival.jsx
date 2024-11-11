import React, { useState } from 'react';
import '../NewArrival.css';
import arrow  from '../assets/images/Polygon 1@2x.png'
function NewArrival() {
  const [mainImage, setMainImage] = useState('https://s3-alpha-sig.figma.com/img/0f98/0593/7fc606081bc1e843806fbba94b7017f3?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AiP~MzW~OTqv6yTUk7yTGrckLA-Dq4Brr4hK6-cr6zM-6V~9muDAcg8NHDlw0tRX6GWukQZaOed7ovVaGtOcQO4M~d56Q7u5xkC42iwgDyR44vkTsWj5a3S1gM3IdzAuZ~XirP0ItcpVo7ePOJFE8NGgaKd7iLtvLCq-dLb2YOtZ9FSjW-wO82z8pPa4TnlpDVC3iD9B5h6xjMBXktyiOHh2faUQDoAs9WcXbmMq4YX2wr8b97WKtsPAsHTeLhIKVAF9qZnz2siZAZ5~bax5X4NPB8AdEAYI5EQsKlTcQO5-0tTQ7XGuSkNa5tRHiZCya~1-~seJtxO2brJa7vRSqg__'); // Default main image
  const thumbnails = [
    'https://s3-alpha-sig.figma.com/img/e9b6/d3d7/b54b74182021c9d97f78e490998856f4?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oC1yf2-XhDF5MYNH9t4UTPaHhOH33Q1lZtFOE9Sa7Mmi4iWPFOQs3eUJ1qomwADnTvVmqUIjS4Mb2ZPo28e-VsOfK51obu7Mm8Ufng2Pjy7jK9coRDyVzZ5eHtE6fHfI2G2vGVTpIfjdiYcfns0ks9sNqUYwDA2Wz3Ng2LorMpeZdWdoHjCVMG6nv-ei40sj3B4BKnTYOA4sCNrbFec95NBiaJrmfb7T6iC2SE5Wz8iwsQUXWJfZGdWP2x5Ju7XoEeAauuDKkd8sCm~IQVYBzk9ufQ-l3S8YQrm7ZLjUzgIbGs-LqTdeOHr7qHN1POZ-XYkD~9xoGMHE0mFvllPc6w__',
    'https://s3-alpha-sig.figma.com/img/e9b6/d3d7/b54b74182021c9d97f78e490998856f4?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oC1yf2-XhDF5MYNH9t4UTPaHhOH33Q1lZtFOE9Sa7Mmi4iWPFOQs3eUJ1qomwADnTvVmqUIjS4Mb2ZPo28e-VsOfK51obu7Mm8Ufng2Pjy7jK9coRDyVzZ5eHtE6fHfI2G2vGVTpIfjdiYcfns0ks9sNqUYwDA2Wz3Ng2LorMpeZdWdoHjCVMG6nv-ei40sj3B4BKnTYOA4sCNrbFec95NBiaJrmfb7T6iC2SE5Wz8iwsQUXWJfZGdWP2x5Ju7XoEeAauuDKkd8sCm~IQVYBzk9ufQ-l3S8YQrm7ZLjUzgIbGs-LqTdeOHr7qHN1POZ-XYkD~9xoGMHE0mFvllPc6w__',
    'https://s3-alpha-sig.figma.com/img/e9b6/d3d7/b54b74182021c9d97f78e490998856f4?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oC1yf2-XhDF5MYNH9t4UTPaHhOH33Q1lZtFOE9Sa7Mmi4iWPFOQs3eUJ1qomwADnTvVmqUIjS4Mb2ZPo28e-VsOfK51obu7Mm8Ufng2Pjy7jK9coRDyVzZ5eHtE6fHfI2G2vGVTpIfjdiYcfns0ks9sNqUYwDA2Wz3Ng2LorMpeZdWdoHjCVMG6nv-ei40sj3B4BKnTYOA4sCNrbFec95NBiaJrmfb7T6iC2SE5Wz8iwsQUXWJfZGdWP2x5Ju7XoEeAauuDKkd8sCm~IQVYBzk9ufQ-l3S8YQrm7ZLjUzgIbGs-LqTdeOHr7qHN1POZ-XYkD~9xoGMHE0mFvllPc6w__',
  ];

  const handleThumbnailClick = (image) => {
    setMainImage(image); // Change the main image when clicking on a thumbnail
  };

  return (
    <div className="new-arrival">
      <div className="text-section">
        <h2>New Arrival</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <button className="explore-button">Explore more</button>
      </div>
      
      <div className="image-slider">
        <div className="thumbnail-container">
          {thumbnails.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`thumbnail-${index}`}
              className="thumbnail"
              onClick={() => handleThumbnailClick(img)}
            />
          ))}
        </div>
        
        <div className="main-image">
          <img src={mainImage} className='image-big' alt="main" />
          <button className="play-button"> <img src={arrow}></img></button>
        </div>
      </div>
    </div>
  );
}

export default NewArrival;
