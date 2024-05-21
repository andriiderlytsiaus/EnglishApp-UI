import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carrousel.css';
import Img from '../../img/FillInTheBlanksImg.jpg'

const descriptionData = [
  {
    id: 1,
    name: 'Different types of exercises',
    description: 'Choose from tasks like filling in the blanks, matching words with definitions, tackling multiple-choice challenges, or testing your knowledge with true-false questions'
  },
  {
    id: 2,
    name: 'Different types of exercises',
    description: 'Choose from tasks like filling in the blanks, matching words with definitions, tackling multiple-choice challenges, or testing your knowledge with true-false questions'
  },
  {
    id: 3,
    name: 'Different types of exercises',
    description: 'Choose from tasks like filling in the blanks, matching words with definitions, tackling multiple-choice challenges, or testing your knowledge with true-false questions'
  },
  {
    id: 4,
    name: 'Different types of exercises',
    description: 'Choose from tasks like filling in the blanks, matching words with definitions, tackling multiple-choice challenges, or testing your knowledge with true-false questions'
  },
  {
    id: 3,
    name: 'Different types of exercises',
    description: 'Choose from tasks like filling in the blanks, matching words with definitions, tackling multiple-choice challenges, or testing your knowledge with true-false questions'
  },
  {
    id: 4,
    name: 'Different types of exercises',
    description: 'Choose from tasks like filling in the blanks, matching words with definitions, tackling multiple-choice challenges, or testing your knowledge with true-false questions'
  },

];

const Carrousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    centerMode: true,        
    centerPadding: '25%',    
  };

  return (
    <div class="carousel"> 
      <div className="carousel-container">
        <Slider {...settings}>
          {descriptionData.map((description) => (
            <div key={description.id} className="description-item">
              <h3>{description.name}</h3>
              <blockquote>{description.description}</blockquote> 
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carrousel;
