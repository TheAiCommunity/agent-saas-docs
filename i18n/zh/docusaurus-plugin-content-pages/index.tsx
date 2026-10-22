import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from '@site/src/pages/index.module.css';

const quickLinks = [
  {title: '快速上手', to: '/zh/docs/getting-started/quickstart', text: '从登录到发出第一篇内容。'},
  {title: '创建第一个任务', to: '/zh/docs/guides/first-task', text: '自动化任务由什么组成。'},
  {title: '社交平台', to: '/zh/docs/integrations/platforms', text: '连接小红书、微信、抖音、B站、X。'},
  {title: '技能', to: '/zh/docs/skills/', text: '从技能市场安装写作技能。'},
  {title: 'API 参考', to: '/zh/docs/developer/api-reference', text: '全部接口，由 OpenAPI 规范生成。'},
  {title: '常见问题', to: '/zh/docs/reference/faq', text: '最常见问题的解答。'},
];

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Agent SaaS 文档
        </Heading>
        <p className="hero__subtitle">Agent SaaS 的使用指南与 API 文档</p>
        <p className={styles.heroText}>
          AI 内容生产与社交媒体自动化：生成文章与配图，审核后按计划发布到小红书、微信、抖音、B站和X。
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/zh/docs/getting-started/quickstart">
            快速开始
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            to="/zh/docs/developer/api-reference">
            API 参考
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            href="https://saas.theaicommunity.net/">
            打开产品
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
          Agent SaaS 是什么？
        </Heading>
        <p className={styles.sectionText}>
          Agent SaaS 是一个 AI 内容生产与社交媒体自动化平台。连接你的社交媒体账号，选择模板和技能，创建自动化任务。平台生成草稿和配图，经过审核后按计划发布，并将效果数据收集到报告中。
        </p>
      </div>
    </section>
  );
}

function QuickStart(): ReactNode {
  const steps = [
    {
      title: '登录',
      text: '使用租户编码登录，首次登录设置自己的密码。',
      to: '/zh/docs/getting-started/accounts',
    },
    {
      title: '连接社交媒体账号',
      text: '抖音、B站、X 走 OAuth；小红书走引导式 Cookie 登录。',
      to: '/zh/docs/integrations/platforms',
    },
    {
      title: '创建第一个任务',
      text: '选定主题、计划和发布目标——其余交给平台。',
      to: '/zh/docs/guides/first-task',
    },
  ];
  return (
    <section className={clsx('section', styles.sectionAlt)}>
      <div className="container">
        <Heading as="h2" className="text--center">
          三步发出第一篇内容
        </Heading>
        <div className="row">
          {steps.map((step, i) => (
            <div key={step.title} className={clsx('col col--4')}>
              <div className={styles.step}>
                <div className={styles.stepNumber}>{i + 1}</div>
                <Heading as="h3">{step.title}</Heading>
                <p>{step.text}</p>
                <Link to={step.to}>查看指南 →</Link>
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
          快速入口
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

const features = [
  {
    title: '内容自动化',
    description: '定时任务根据模板和技能生成文章与配图，经过审核后自动发布，无需人工操作。',
  },
  {
    title: '多平台发布',
    description: '连接小红书、微信、抖音、B站和X的账号，用一套流程向各个平台发布内容。',
  },
  {
    title: '技能体系',
    description: '从技能市场安装写作技能，每个任务最多挂载十个，塑造内容的产出方式。',
  },
  {
    title: '开发者 API',
    description: '覆盖产品全部能力的 REST API：认证、任务、审核、发布和素材，并提供 OpenAPI 规范。',
  },
];

function Features(): ReactNode {
  return (
    <section className="section">
      <div className="container">
        <Heading as="h2" className="text--center">
          核心能力
        </Heading>
        <div className="row">
          {features.map((props, idx) => (
            <div key={idx} className={clsx('col col--3')}>
              <div className="text--center padding-horiz--md">
                <Heading as="h3">{props.title}</Heading>
                <p>{props.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Agent SaaS 文档"
      description="Agent SaaS 的使用指南与 API 文档：AI 内容生产与社交媒体自动化。">
      <HomepageHeader />
      <main>
        <WhatIs />
        <QuickStart />
        <Features />
        <QuickLinks />
      </main>
    </Layout>
  );
}
