'use client'

import './Engine.css'

import { useRouter } from 'next-intl/client'
import { useTranslations } from 'next-intl'
import Link from 'next-intl/link'
import Image from 'next/image'

import { useIsomorphicLayoutEffect } from '@/helper/useIsomorphicLayoutEffect'
import Header from '@/components/Header'
import SupportCard from '@/components/SupportCard'

export default function PassPage() {
  const translate = useTranslations('Home')

  return (
    <>
      <Header />
      <main className='engine'>
        <aside className='information'>
          <div className="advantages">
            <div className="advantage">
              <h3>Эффективность</h3>
              
              <ul>
                <li>Повышает эффективность ДВС путем дожига несгораемого топлива. Это позволяет экономить топливо (от 10 до 40 %),</li>
                <li>Продлевает жизненный цикл ДВС путем уменьшения нагара основных компонентов ДВС</li>
              </ul>
            </div>

            <div className="advantage">
              <h3>Экологичность</h3>

              <ul>
                <li>Вдвое сокращает вредные выбросы в атмосферу</li>
                <li>Возможность уменьшения затрат за эмиссию в окружающую среду</li>
              </ul>
            </div>
          </div>

          <div className="support">
            <SupportCard
              icon='/support/support.png'
              label='Полное сервисное сопровождение в гарантийный и послегарантийный период'
            />

            <SupportCard
              icon='/support/year.png'
              label='с возможностью продления'
            />
          </div>
        </aside>

        <div className="content">
          <div className="tagline">
            <h1>Водородные системы для ДВС</h1>

            <div className="image">
              <Image src={'/engine/tagline.png'} alt={''} fill />
            </div>

            <p>
              <span>HydroNRG</span> из воды вырабатывает водород который комбинируется с любым видом топлива через воздушную систему ДВС
            </p>
          </div>

          <aside className='testing'>
            <div className="test">
              <Image src={'/testing/lgmg.png'} alt={''} fill />
            </div>
            <div className="test">
              <Image src={'/testing/volvo.png'} alt={''} fill />
            </div>
            <div className="test">
              <Image src={'/testing/cat.png'} alt={''} fill />
            </div>
          </aside>
        </div>
      </main>
    </>
  )
}
