import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Tradução de fã para fã',
    Svg: require('@site/static/img/fofa2.svg').default,
    description: (
      <>
        Nossa fansub é composta por fans de VNs que queremos deixar as obras mais acessíveis.
      </>
    ),
  },
  {
    title: 'Gratis e sem anúncios',
    Svg: require('@site/static/img/kohaku.svg').default,
    description: (
      <>
        Todos os nossos patchs são gratuitos e acessíveis para todos! E de brinde, também não colocamos nem propagandas ou rastreadores!
      </>
    ),
  },
  {
    title: 'Uma comunidade focada em aprender',
    Svg: require('@site/static/img/toradora.svg').default,
    description: (
      <>
        Além de fansub, temos planos de ajudar gratuitamente as pessoas a aprenderem japones para lerem obras com baixo potencial de tradução.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
