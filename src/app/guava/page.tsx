import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import Contact from '@/components/Contact';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import InnerHero from '@/components/InnerHero';
import JsonLd from '@/components/JsonLd';
import Navbar from '@/components/Navbar';
import SectionStage from '@/components/visual/SectionStage';
import { GUAVA_PRODUCTS, GUAVA_STEPS, GUAVA_STOP_PAYING, guavaFaqs } from '@/data/guava';
import { guavaPillarGraph } from '@/lib/schema';
import { SITE_NAME, SITE_URL } from '@/lib/site';
import styles from '@/components/Guava.module.css';

const title = 'Guava Product Suite — Business Software You Own';
const description =
  'Own your business software instead of renting it. GuavaCRM, GuavaERP, GuavaHR and 7 more, deployed on your own cloud, bought once, with AI built in — no per-user licences, no renewals.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/guava' },
  robots: { index: true, follow: true },
  keywords: [
    'own your business software',
    'stop renting SaaS',
    'one-time payment software suite',
    'self-hosted business apps you own',
    'SaaS alternative you own',
    'business software without per-user pricing',
  ],
  openGraph: {
    title: `${title} | ${SITE_NAME}`,
    description,
    url: `${SITE_URL}/guava`,
    siteName: SITE_NAME,
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${title} | ${SITE_NAME}`,
    description,
  },
};

export default function GuavaPage() {
  return (
    <>
      <JsonLd data={guavaPillarGraph(GUAVA_PRODUCTS, guavaFaqs)} />
      <main>
        <Navbar />
        <InnerHero
          badge="Guava Product Suite"
          line1="Own Your Business"
          line2="Software"
          highlight="Own"
          subtitle="CRM, ERP, HR and seven more — deployed on your own cloud, bought once, with AI built in. No per-user licences, no annual renewals, no growth penalty."
          primaryHref="#contact"
          secondaryHref="/blog/one-time-payment-crm"
          secondaryLabel="See a full breakdown"
        />

        <section id="the-rent-trap">
          <SectionStage>
            <div className="container">
              <div className={styles.wrap}>
                <Breadcrumbs
                  items={[
                    { name: 'Home', path: '/' },
                    { name: 'Guava Product Suite', path: '/guava' },
                  ]}
                />
                <div className={`${styles.header} reveal`}>
                  <div className="section-badge">
                    <span className="section-badge-dot" />
                    Own it, don&apos;t rent it
                  </div>
                  <h2 className={styles.headline}>Every core business tool is now a rental.</h2>
                </div>
                <div className={`${styles.lede} reveal reveal-delay-1`}>
                  <p>
                    Your CRM, your ERP, your helpdesk, your project tool — you pay for them per user,
                    per month, every month. The bill goes up when you hire, when you add a client,
                    when the vendor raises prices, and when you want the AI features. Stop paying and
                    you lose access to your own records. Over five years a mid-size team spends tens
                    or hundreds of thousands of dollars, and owns nothing at the end.
                  </p>
                  <p>
                    The Guava Product Suite is the opposite model. WhiteGuava deploys each product on
                    your own cloud, configures it to how you work, switches on an AI assistant built
                    directly in, and hands it over with the database and the source code.{' '}
                    <b>
                      From that point it is yours — the only ongoing cost is roughly $20 to $45 a
                      month for the server it runs on.
                    </b>{' '}
                    No per-seat licence. No renewal. No AI upgrade.
                  </p>
                  <p>
                    Each product below has its own full breakdown — a live cost comparison against
                    the incumbents, interactive diagrams, and the feature matrix.
                  </p>
                </div>
              </div>
            </div>
          </SectionStage>
        </section>

        <section id="products">
          <SectionStage>
            <div className="container">
              <div className={styles.wrap}>
                <div className={`${styles.header} reveal`}>
                  <div className="section-badge">
                    <span className="section-badge-dot" />
                    Ten applications
                  </div>
                  <h2 className={styles.headline}>One model, across the whole business.</h2>
                </div>
                <div className={styles.grid}>
                  {GUAVA_PRODUCTS.map((p, i) => (
                    <a
                      key={p.name}
                      href={p.href}
                      className={`${styles.card} reveal reveal-delay-${Math.min((i % 3) + 1, 6)}`}
                    >
                      <span className={styles.cardCat}>{p.category}</span>
                      <span className={styles.cardName}>{p.name}</span>
                      <span className={styles.cardDoes}>{p.does}</span>
                      <span className={styles.cardReplaces}>
                        Instead of <b>{p.replaces}</b>
                      </span>
                      <span className={styles.cardFoot}>
                        <span className={styles.cardPrice}>~${p.serverMo}/mo server</span>
                        <span className={styles.cardMore}>Read the breakdown →</span>
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </SectionStage>
        </section>

        <section id="how-owning-works">
          <SectionStage>
            <div className="container">
              <div className={styles.wrap}>
                <div className={`${styles.header} reveal`}>
                  <div className="section-badge">
                    <span className="section-badge-dot" />
                    How it works
                  </div>
                  <h2 className={styles.headline}>From subscription to ownership in four steps.</h2>
                </div>
                <div className={styles.steps}>
                  {GUAVA_STEPS.map((s, i) => (
                    <div key={s.title} className={`${styles.step} reveal reveal-delay-${i + 1}`}>
                      <span className={styles.stepNum}>{i + 1}</span>
                      <h3 className={styles.stepTitle}>{s.title}</h3>
                      <p className={styles.stepBody}>{s.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SectionStage>
        </section>

        <section id="what-you-stop-paying-for">
          <SectionStage>
            <div className="container">
              <div className={styles.wrap}>
                <div className={`${styles.header} reveal`}>
                  <div className="section-badge">
                    <span className="section-badge-dot" />
                    The difference
                  </div>
                  <h2 className={styles.headline}>What you stop paying for.</h2>
                </div>
                <div className={`${styles.tableWrap} reveal reveal-delay-1`}>
                  <table className={styles.table}>
                    <thead>
                      <tr>
                        <th>Cost</th>
                        <th>On a SaaS subscription</th>
                        <th>On a Guava product you own</th>
                      </tr>
                    </thead>
                    <tbody>
                      {GUAVA_STOP_PAYING.map((row) => (
                        <tr key={row.item}>
                          <td>{row.item}</td>
                          <td className={styles.sub}>{row.subscription}</td>
                          <td className={styles.ours}>{row.guava}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </SectionStage>
        </section>

        <section id="who-its-for">
          <SectionStage>
            <div className="container">
              <div className={styles.wrap}>
                <div className={`${styles.header} reveal`}>
                  <div className="section-badge">
                    <span className="section-badge-dot" />
                    Who it&apos;s for
                  </div>
                  <h2 className={styles.headline}>Built for teams tired of the meter.</h2>
                </div>
                <ul className={`${styles.forList} reveal reveal-delay-1`}>
                  <li>Growing companies where every hire raises three or four software bills at once.</li>
                  <li>Businesses with data-residency, audit or confidentiality requirements about where records live.</li>
                  <li>Agencies and consultancies that need clients and partners in their tools without paying per head.</li>
                  <li>Teams that have outgrown spreadsheets and free tiers but do not want a multi-year subscription to move up.</li>
                  <li>Operations with rules — leave policies, accrual conventions, pricing logic — that generic SaaS cannot quite express.</li>
                  <li>Anyone who has done the five-year maths on Salesforce, NetSuite, Zendesk or Workday and wants that budget back.</li>
                </ul>
              </div>
            </div>
          </SectionStage>
        </section>

        <FAQ items={guavaFaqs} />

        <section>
          <SectionStage>
            <div className="container">
              <div className={styles.wrap}>
                <div className={`${styles.ctaBox} reveal`}>
                  <h2>Start with the one that hurts most.</h2>
                  <p>
                    Most businesses begin with the CRM, ERP or helpdesk — usually when a renewal is
                    coming up — and add the rest over time. WhiteGuava deploys it on your cloud,
                    imports your data, switches on the AI, and hands it over. One-time setup, then the
                    server cost only.
                  </p>
                  <a href="#contact" className={styles.ctaBtn}>
                    <span>Get a Guava Suite quote</span>
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </SectionStage>
        </section>

        <Contact />
        <Footer />
      </main>
    </>
  );
}
