'use client';

import './../Home.css';

import { useTranslations } from 'next-intl';
import Header from '@/components/Header';
import ButtonLink from '@/components/ButtonLink';
import ProductLink from '@/components/ProductLink';

export default function PassPage() {
  const translate = useTranslations('Home');

  return (
    <>
      <Header />

      <main className="home">
        <nav className="links">
          <ButtonLink href="/news">Новости</ButtonLink>

          <ButtonLink href="/about">О компании</ButtonLink>
        </nav>

        <div className="wrapper">
          <div className="content">
            <div className="tagline">
              <h1>
                &nbsp;&nbsp;&nbsp;&nbsp;Энерго<span>эффективность</span>
                <br />
                <span>Эко</span>логичность
              </h1>
            </div>

            <nav className="products">
              <ProductLink href="/engine" image="/products/engine.svg" label="Водородные системы для ДВС" />
              <ProductLink href="/heating" image="/products/heating.png" label="Водородные отопительные системы" disabled />
              <ProductLink href="/factory" image="/products/factory.png" label="Промышленные водородные системы" />
            </nav>
          </div>
        </div>
      </main>
    </>
  );
}
