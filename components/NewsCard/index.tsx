import React from 'react';
import Image from 'next/image';
import './NewsCard.css';

const description: string = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`;
const title: string = 'This is a headline!!!';
const videoLink: string = 'https://www.youtube.com/watch?v=V8eWxOLXLK8';
// const image: string = '/products/hydrogen.png';
const image: string = 'http://hydronrg.kz/images/0NbBxDippXoF7ryo6hcM82y88fOxx60QVvd0PuhW.png';

interface NewsCardProps {
  title: string;
  description: string;
  link: string;
  image: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ title, description, link, image }) => {
  const imageUrl = `http://hydronrg.kz/${image}`
  const getVideoId = (videoLink: string): string | null => {
    const regex = /(?:\?v=|\/embed\/|\.be\/)([A-Za-z0-9_-]{11})/; 
    const match = videoLink.match(regex);
    return match ? match[1] : null;
  };
  const constructEmbedUrl = (videoId: string): string => {
    return `https://www.youtube.com/embed/${videoId}`;
  };

  const videoId = link ? getVideoId(link) : null;
  const embedUrl = videoId ? constructEmbedUrl(videoId) : null;
  return (
    <div className="news__card">
      <h3 className="title">{title}</h3>
      <p className="description">{description}</p>
      <div className="media flex">
        {image && (
        <div className="icon flex flex-1 items-center justify-center">
          <Image src={imageUrl} alt={''} width={250} height={250} />
        </div>
        )}
        {embedUrl && (
          <div className="flex-1 flex items-center self-stretch">
          <div className="flex-1 video-responsive">
          <iframe
            width="560"
            height="315"
            src={embedUrl}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
          </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsCard;
