import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const quickLinks = [
  {title: 'Quickstart', to: '/docs/getting-started/quickstart', text: 'Sign in and finish your first text pass.'},
  {title: 'Create your first task', to: '/docs/guides/first-task', text: 'From one-off drafts to scheduled content tasks.'},
  {title: 'Platforms and enterprise apps', to: '/docs/integrations/platforms', text: 'Connect content platforms and enterprise applications.'},
  {title: 'Skills', to: '/docs/skills/', text: 'Writing methods with traceable sources.'},
  {title: 'API reference', to: '/docs/developer/api-reference', text: 'Every endpoint, generated from the OpenAPI spec.'},
  {title: 'FAQ', to: '/docs/reference/faq', text: 'Answers to the questions we hear most.'},
];

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Agent SaaS Docs
        </Heading>
        <p className="hero__subtitle">
          User guides and API documentation for Jingya Agent
        </p>
        <p className={styles.heroText}>
          Writing methods, office tools and content platforms in one
          workspace. Bring your materials and get a reviewable draft in the
          workbench; generate and download files when you need them; connect
          plugins and accounts when you need external research or social
          delivery.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/getting-started/quickstart">
            Get started
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            to="/docs/developer/api-reference">
            API reference
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            href="https://saas.theaicommunity.net/">
            Open the product
          </Link>
        </div>
      </div>
    </header>
  );
}

function WhatIs(): ReactNode {
  return (
    <section className={styles.section}>
      <div className="container">
        <Heading as="h2" className="text--center">
          What is Jingya Agent?
        </Heading>
        <p className={styles.sectionText}>
          Jingya Agent brings writing methods, office tools and content
          platforms into a single workspace. You provide the materials and get
          a reviewable draft in the workbench. When you need a file, you
          generate and download it. When you need external research or social
          delivery, you connect the matching plugins and accounts, and each
          account's capabilities are checked per action.
        </p>
      </div>
    </section>
  );
}

function QuickStart(): ReactNode {
  const steps = [
    {
      title: 'Finish your first text pass',
      text: 'Sign in, install a skill, send your own material, and check the draft the model returns.',
      to: '/docs/getting-started/quickstart',
    },
    {
      title: 'Install methods and tools',
      text: 'Pick writing skills with traceable sources, and plugins for office files, web reading and platforms.',
      to: '/docs/skills/',
    },
    {
      title: 'Run it on a schedule',
      text: 'For continuous production, create an automation task with a schedule and review each run.',
      to: '/docs/guides/first-task',
    },
  ];
  return (
    <section className={clsx('section', styles.sectionAlt)}>
      <div className="container">
        <Heading as="h2" className="text--center">
          Three steps to your first draft
        </Heading>
        <div className="row">
          {steps.map((step, i) => (
            <div key={step.title} className={clsx('col col--4')}>
              <div className={styles.step}>
                <div className={styles.stepNumber}>{i + 1}</div>
                <Heading as="h3">{step.title}</Heading>
                <p>{step.text}</p>
                <Link to={step.to}>Read the guide →</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuickLinks(): ReactNode {
  return (
    <section className={styles.section}>
      <div className="container">
        <Heading as="h2" className="text--center">
          Quick links
        </Heading>
        <div className="row">
          {quickLinks.map((link) => (
            <div key={link.title} className={clsx('col col--4', styles.linkCard)}>
              <Link to={link.to}>
                <Heading as="h3">{link.title}</Heading>
                <p>{link.text}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Agent SaaS documentation"
      description="User guides and API documentation for Jingya Agent: writing methods, office tools and content platforms in one workspace.">
      <HomepageHeader />
      <main>
        <WhatIs />
        <QuickStart />
        <HomepageFeatures />
        <QuickLinks />
      </main>
    </Layout>
  );
}
