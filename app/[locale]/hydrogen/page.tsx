'use client';

import './Hydrogen.css';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

import Header from '@/components/Header';

export default function PassPage() {
  const translate = useTranslations('Home');

  return (
    <>
      <Header />

      <main className="hydrogen">
        <div className="column">
          <div className="banner">
            <span>Водород</span> - <span>топливо 21 века</span>
          </div>

          <div className="content">
            <h3>Основные свойства водорода</h3>

            <p>
              <b>Водород</b> (hydrogene – в переводе водотворное вещество)
            </p>

            <ol>
              <li>Самое распространённое химическое вещество во Вселенной, что по праву и определило его на первом месте в таблице Менделеева</li>
              <li>Самой лёгкое газообразное вещество, в 14.5 раз легче кислорода, в смеси с которым при определенных условиях и образуется вода.</li>
              <li>Атомарная частица водорода достаточно мелкая, чтобы проникать через множество металлов.</li>
              <li>
                Водород обладает самой высокой теплопроводностью среди газообразных веществ (примерно в 4,5 раза выше чем у любого вида топлива). Тепловая способность всеми
                привычного углеводородного топлива прямо пропорционально зависит от содержания в нем водорода, т.е. без водорода топливо гореть не будет!
              </li>
            </ol>

            <div className="table">
              <Image src={'/hydrogen/table.png'} alt={''} fill />
            </div>
          </div>
        </div>
        <div className="column light edged">
          <div className="content">
            <h3>Развитие водородной энергетики в современных условиях</h3>

            <p className="space">
              До недавнего времени развитие водородной энергетики в целом было не возможным (хотя самой технологии уже более 70 лет...), а где-то его развитие было нецелесообразным
              по нескольким основным причинам:
            </p>

            <ol className="space">
              <li>Энергозатратные технологии производства водорода.</li>
              <li>Небезопасные либо не экологичные условия транспортировки.</li>
              <li>Небезопасность и дороговизна условий хранения водорода.</li>
            </ol>

            <p className="space">
              В последние 5 лет все и везде начали говорить о необходимости развития водородных технологий и в целом о зеленой энергетике. Связано это в большей степени из-за
              загрязнения атмосферы при столь активном использовании углеводородного сырья и уже истощением их запасов.
            </p>

            <p>
              Весь мир с существующими технологиями работает над созданием инфраструктуры где необходимо создавать целые отрасли требующие многомиллиардные затраты, которые сможет
              осилить только государство либо опять же финансирование частными корпорациями.
            </p>
          </div>
        </div>
        <div className="column gray">
          <div className="content">
            <h3 className="space">Водородные технологии HydroNRG</h3>

            <p className="space">
              <b>Автономность</b> - независимая система генерации водорода, для которой требуется только вода и электроэнергия. Ни сейчас, ни в будущем Вам не придется платить за
              водород как за топливо.
            </p>

            <p className="space">
              <b>Энергоэффективность</b> - в соответствии с нормами энергоэффективности, водородные системы HydroNRG можно отнести к классу А так как их энергопотребление в
              несколько раз ниже имеющихся аналогов в мире.
            </p>

            <p className="space">
              <b>Экологичность</b> - соответствие экологическим принципам ESG. Водород в комбинации с любым топливом вдвое сокращает выбросы вредных веществ в атмосферу, а при
              полном замещении сгораемый водород вновь превращается в воду.
            </p>

            <p className="space">
              <b>Отсутствие затрат</b> на строительство и оснащение инфраструктуры для транспор-тировки и хранения водорода.
            </p>

            <p className="space">
              <b>Безопасность</b> - производство водорода ровно по мере потребления где нет необходимости его хранения.
            </p>

            <p className="space">
              <b>Комбинирование либо полное замещение природного газа</b> с возможностью внедрения наших водородных систем в уже действующие методы и технологии горения.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
