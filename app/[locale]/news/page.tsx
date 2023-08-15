'use client';

import { useEffect, useState } from 'react';
import './../Home.css';
import { useTranslations } from 'next-intl';
import Header from '@/components/Header';
import NewsCard from '@/components/NewsCard';

interface NewsItem {
  id: number;
  title: string;
  description: string;
  link: string;
  image: string;
}

export default function PassPage() {
  const translate = useTranslations('Home');
  const [newsData, setNewsData] = useState<NewsItem[]>([]);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await fetch('https://hydronrg.kz/api/news');
        const data = await response.json();
        setNewsData(data.news);
      } catch (error) {
        console.error('Error fetching news data:', error);
      }
    };

    fetchNewsData();
  }, []);

  return (
    <>
      <Header />

      <main className="home">
        <div className="newsContainer">
          {newsData.map((item) => (
            <NewsCard
              key={item.id}
              title={item.title}
              description={item.description}
              link={item.link}
              image={item.image}
            />
          ))}
        </div>
      </main>
    </>
  );
}
