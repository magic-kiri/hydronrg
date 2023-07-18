import React from 'react';
import Image from 'next/image';
import './NewsCard.css';

const description: string = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`;
const title: string = 'This is a headline!!!';
const videoLink: string = 'https://www.youtube.com/watch?v=V8eWxOLXLK8';
// const image: string = '/products/hydrogen.png';
const image: string = 'https://picsum.photos/200/300';

const NewsCard = () => {
  return (
    <div className="news__card">
      <h3 className="title">{title}</h3>
      <p>{description}</p>
      <div className="media">
        <div className="icon">
          <Image className="image" src={image} alt={''} width={250} height={250} />
        </div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/V8eWxOLXLK8"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
      </div>
    </div>
  );
};

export default NewsCard;
