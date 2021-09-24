/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'NFT Builder',
    image: '/img/item_1.png',
    description: (
      <>
        Increase the size of the creative talent pool by tapping gaming communities
      </>
    ),
  },
  {
    title: 'Marketplace',
    image: '/img/item_2.png',
    description: (
      <>
        Aggregate buy, sell, trade demand for better liquidity and efficient price discovery
      </>
    ),
  },
  {
    title: 'NFT Wallet',
    image: '/img/item_3.png',
    description: (
      <>
        Manage all game assets from one platform for convenience and uniform experience
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} alt={title} src={image} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
