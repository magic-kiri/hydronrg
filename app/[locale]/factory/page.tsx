'use client';

import './Factory.css';

import { useRouter } from 'next-intl/client';
import { useTranslations } from 'next-intl';
import Link from 'next-intl/link';
import Image from 'next/image';

import { useIsomorphicLayoutEffect } from '@/helper/useIsomorphicLayoutEffect';
import Header from '@/components/Header';
import SupportCard from '@/components/SupportCard';

export default function Factory() {
  const translate = useTranslations('Home');

  return (
    <>
      <Header />
      <div className="body">
        <div className="left">
          <div className="card">
            <Image src={'/factory/energy.png'} alt={''} width={100} height={100} className="py-4 sm:py-0 mr-10" />

            <p className="!indent-6">
              <span className="text-primary font-bold">Энергоэффективность </span> - в соответствии с нормами энергоэффективности, водородные системы HydroNRG можно отнести к
              классу А, так как их энергопотребление в несколько раз ниже имеющихся аналогов в мире.
            </p>
          </div>
          <div className="middle">
            <div className="flex justify-center items-center">
              {/* <h1 className="text-4xl font-bold text-gray-600">ПВС</h1> */}
              <Image src={'/factory/newPres.png'} alt={''} width={600} height={600} />
            </div>

            {/* <p className="mt-10 font-semibold text-xl text-gray-600"> Возможность интеграции ПВС в действующих технологических условиях</p> */}
          </div>
          <div className="card">
            <Image src={'/factory/Сайт ПВС3.png'} alt={''} width={100} height={100} className="py-4 sm:py-0 mr-10" />

            <p className="!indent-6">
              {' '}
              <span className="text-primary font-bold">Экологичность </span> - соответствие экологическим принципам ESG. Водород в комбинации с любым топливом вдвое сокращает
              выбросы вредных веществ в атмосферу, а при полном замещении сгораемый водород вновь превращается в воду.
            </p>
          </div>
        </div>
        <div className="right">
          <h1 className="title">Стратегическая и экономическая эффективность</h1>

          <div className="item">
            <div className="itemnumber">1</div>
            <p className="text-content">
              <span className="font-bold">Независимость - автономные </span> системы генерации водорода, HydroNRG для которых требуется только вода и электроэнергия. Ни сейчас, ни
              в будущем Вам не придется платить за водород как за топливо.
            </p>
          </div>
          <div className="item">
            <div className="itemnumber">2</div>
            <p className="text-content">
              <span className="font-bold"> Комбинирование либо полное замещение углеводородного топлива </span> с возможностью внедрения наших водородных систем в уже действующие
              технологии горения.
            </p>
          </div>
          <div className="item">
            <div className="itemnumber">3</div>
            <p className="text-content">
              {' '}
              <span className="font-bold"> Отсутствие затрат </span>на строительство и оснащение инфраструктуры для транспортировки и хранения водорода.{' '}
            </p>
          </div>
          <div className="item">
            <div className="itemnumber">4</div>
            <p className="text-content">
              <span className="font-bold"> Уменьшение себестоимости </span> товаров и услуг за счет значительного сокращения расходов на используемое топливо для производства
              конечной продукции.
            </p>
          </div>
          <div className="item">
            <div className="itemnumber">5</div>
            <p className="text-content">
              <span className="font-bold"> Сокращение выплат по экологическим сборам </span> за загрязнение окружающей среды.
            </p>
          </div>
          <div className="bottomright">
            <p>
              Сокращение расходов
              <br></br>
              на энергоресурсы - 40-60%
            </p>
            <Image src={'/factory/5.png'} alt={''} width={80} height={80} className="ml-5" />
          </div>
        </div>
      </div>
    </>
  );
}
