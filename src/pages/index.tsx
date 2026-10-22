import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const quickLinks = [
  {title: 'Quickstart', to: '/docs/getting-started/quickstart', text: 'From sign-in to your first published post.'},
  {title: 'Create your first task', to: '/docs/guides/first-task', text: 'What an automation task is made of.'},
  {title: 'Social platforms', to: '/docs/integrations/platforms', text: 'Connect Xiaohongshu, WeChat, Douyin, Bilibili, Twitter.'},
  {title: 'Skills', to: '/docs/skills/', text: 'Install writing skills from the skill market.'},
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
          User guides and API documentation for Agent SaaS
        </p>
        <p className={styles.heroText}>
          AI content production and social media automation: generate articles
          and images, review them, and publish to Xiaohongshu, WeChat, Douyin,
          Bilibili and Twitter on a schedule.
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
          What is Agent SaaS?
        </Heading>
        <p className={styles.sectionText}>
          Agent SaaS is an AI content production and social media automation
          platform. You connect your social media accounts, pick templates and
          skills, and create automation tasks. The platform generates drafts
          and images, routes them through review, and publishes on schedule —
          collecting performance data back into reports.
        </p>
      </div>
    </section>
  );
}

function QuickStart(): ReactNode {
  const steps = [
    {
      title: 'Sign in',
      text: 'Log in with your tenant code, then set your own password on first login.',
      to: '/docs/getting-started/accounts',
    },
    {
      title: 'Connect a social media account',
      text: 'OAuth for Douyin, Bilibili and Twitter; guided cookie login for Xiaohongshu.',
      to: '/docs/integrations/platforms',
    },
    {
      title: 'Create your first task',
      text: 'Pick a topic, a schedule and a publish target — the platform handles the rest.',
      to: '/docs/guides/first-task',
    },
  ];
  return (
    <section className={clsx('section', styles.sectionAlt)}>
      <div className="container">
        <Heading as="h2" className="text--center">
          Three steps to your first post
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
      description="User guides and API documentation for Agent SaaS: AI content production and social media automation.">
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
