import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Workbench drafts',
    description: (
      <>
        Bring your own material, get a reviewable draft, and check facts
        against what you provided. Reviews record a reason for every decision.
      </>
    ),
  },
  {
    title: 'Office documents',
    description: (
      <>
        Generate and download Word files from your drafts. Every file creation
        goes through a confirmation card before it runs.
      </>
    ),
  },
  {
    title: '17 writing skills',
    description: (
      <>
        Reusable methods with traceable open-source sources, pinned versions
        and license notes. Up to 3 per workbench round, 10 per automation
        task.
      </>
    ),
  },
  {
    title: '19 plugins',
    description: (
      <>
        Office export, web reading and search, content platforms and
        enterprise apps. Connect your accounts, then check each account's
        available actions before relying on them.
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={clsx('section', styles.features)}>
      <div className="container">
        <Heading as="h2" className="text--center">
          What you can do
        </Heading>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
