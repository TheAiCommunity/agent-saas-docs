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
    title: 'Content automation',
    description: (
      <>
        Scheduled tasks that generate articles and images from templates and
        skills, then route them through review and publish without manual work.
      </>
    ),
  },
  {
    title: 'Multi-platform publishing',
    description: (
      <>
        Connect accounts on Xiaohongshu, WeChat, Douyin, Bilibili and Twitter,
        and deliver content to each platform from a single workflow.
      </>
    ),
  },
  {
    title: 'Skills system',
    description: (
      <>
        Install writing skills from the skill market and attach up to ten of
        them to a task to shape how content is produced.
      </>
    ),
  },
  {
    title: 'Developer API',
    description: (
      <>
        A REST API for everything the product does: authentication, tasks,
        reviews, publishing and assets, with OpenAPI specifications available.
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
          Key features
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
