'use client';

import './../Home.css';

import { useTranslations } from 'next-intl';
import Header from '@/components/Header';
import NewsCard from '@/components/NewsCard';

export default function PassPage() {
  const translate = useTranslations('Home');

  return (
    <>
      <Header />

      <main className="home">
        {/* <nav className="links">
          <ButtonLink href="/news">Новости</ButtonLink>

          <ButtonLink href="/about">О компании</ButtonLink>
        </nav> */}

        <div className="newsContainer">
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
      </main>
    </>
  );
}
