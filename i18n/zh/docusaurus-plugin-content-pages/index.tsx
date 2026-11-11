import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from '@site/src/pages/index.module.css';

const quickLinks = [
  {title: '快速上手', to: '/zh/docs/getting-started/quickstart', text: '登录并完成第一次文字整理。'},
  {title: '创建第一个任务', to: '/zh/docs/guides/first-task', text: '从一次性草稿到按计划运行的内容任务。'},
  {title: '平台与企业应用', to: '/zh/docs/integrations/platforms', text: '连接内容平台和企业应用，逐项检查账号能力。'},
  {title: '技能', to: '/zh/docs/skills/', text: '来源可追溯的 17 项写作方法。'},
  {title: 'API 参考', to: '/zh/docs/developer/api-reference', text: '全部接口，由 OpenAPI 规范生成。'},
  {title: '常见问题', to: '/zh/docs/reference/faq', text: '最常见问题的解答。'},
];

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          鲸芽 Agent 文档
        </Heading>
        <p className="hero__subtitle">鲸芽 Agent 的使用指南与 API 文档</p>
        <p className={styles.heroText}>
          把写作方法、办公工具和内容平台放进同一个工作空间。先提供材料，在工作台得到可审阅的草稿；需要文件时生成并下载，需要外部资料或社媒交付时，再连接对应插件与账号。
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
          鲸芽 Agent 是什么？
        </Heading>
        <p className={styles.sectionText}>
          鲸芽 Agent 把写作方法、办公工具和内容平台放进同一个工作空间。你提供材料，在工作台得到可审阅的草稿；需要文件时生成并下载；需要外部资料或社媒交付时，再连接对应插件与账号，并按账号逐项检查能力。
        </p>
      </div>
    </section>
  );
}

function QuickStart(): ReactNode {
  const steps = [
    {
      title: '完成一次文字整理',
      text: '登录、安装 Skill、发送自己的材料，核对模型返回的草稿。',
      to: '/zh/docs/getting-started/quickstart',
    },
    {
      title: '安装方法与工具',
      text: '选择来源可追溯的写作 Skill，以及办公文件、网页阅读和平台插件。',
      to: '/zh/docs/skills/',
    },
    {
      title: '按计划持续生产',
      text: '需要连续产出时，创建带排期的内容任务，并逐轮查看审核结果。',
      to: '/zh/docs/guides/first-task',
    },
  ];
  return (
    <section className={clsx('section', styles.sectionAlt)}>
      <div className="container">
        <Heading as="h2" className="text--center">
          三步得到第一份草稿
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
    title: '工作台草稿',
    description: '提供自己的材料，得到可审阅草稿，并核对事实是否被改写；每次审核都记录原因。',
  },
  {
    title: '办公文档',
    description: '从草稿生成并下载 Word 文件；每次创建文件都先经过确认卡核对。',
  },
  {
    title: '17 项 Skills',
    description: '来源可追溯、版本固定的写作方法；工作台每轮最多 3 项，自动化任务最多 10 项。',
  },
  {
    title: '19 个插件',
    description: '办公导出、网页阅读与搜索、内容平台和企业应用；连接账号后，逐项检查可用操作再使用。',
  },
];

function Features(): ReactNode {
  return (
    <section className="section">
      <div className="container">
        <Heading as="h2" className="text--center">
          你可以做什么
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
      title="鲸芽 Agent 文档"
      description="鲸芽 Agent 的使用指南与 API 文档：写作方法、办公工具和内容平台在同一个工作空间。">
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
