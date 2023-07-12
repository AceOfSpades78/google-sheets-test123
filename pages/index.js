import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="GB Performance!" />
        <p className="description"></p>
        <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQCVz8QC3QjV_PQUMzyXGC_5b8zg7zgMuUptfwbfUg9z18OIeeOYE_qdpxbbpm3cz6th8Hf8Ze_yFLB/pubhtml?widget=false&amp;headers=false"></iframe>
    </main>

      <Footer />
    </div>
  )
}
