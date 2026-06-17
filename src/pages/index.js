import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

export default function Home() {
  return (
    <Layout
      title="がじゅまるIsland Wiki"
      description="がじゅまるIslandの公式Wiki">
      <header className="hero hero--primary">
        <div className="container">
          <Heading as="h1" className="hero__title">
            がじゅまるIsland Wiki
          </Heading>
          <p className="hero__subtitle">
            釣って、作って、旅をする。
          </p>
          <div>
            <Link className="button button--secondary button--lg" to="/docs/intro">
              Wikiを見る
            </Link>
          </div>
        </div>
      </header>

      <main className="container margin-vert--xl">
        <Heading as="h2">現在整備中です</Heading>
        <p>
          ルール、強化要素、乗り物、Kingdoms、レアドロップなどの情報を順次追加していきます。
        </p>
      </main>
    </Layout>
  );
}
