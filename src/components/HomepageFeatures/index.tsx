import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '導入はワンクリックで簡単',
    description: (
      <>
        アバターにワンクリックで導入できます。
      </>
    ),
  },
  {
    title: 'ポーズを向きに合わせて自動変更',
    description: (
      <>
        仰向け、うつ伏せ、左右を自動で切り替え。
        足固定をONにするだけ。
      </>
    ),
  },
  {
    title: 'スペースドラッグでの高さ調整',
    description: (
      <>
        スペースドラッグで、寝ている時のアバターの高さをフルトラのように調整することが出来るように。
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
