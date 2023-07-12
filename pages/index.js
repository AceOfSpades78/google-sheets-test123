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
        <p className="description">
          GB Performance : Système Double Stimulation<code>pages/index.js</code>
        </p>
        <iframe 
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQhruFCVG80JiPbbyFhR8nXhExDx2nvGa64D5SwXbsO9ysxBEl8rZCRJCUukcVaMLMFsbxDyVknhcb1/pubhtml?gid=0&amp;single=true&amp;widget=false&amp;headers=false">
          class="TEST"
    </iframe>
    </main>

      <Footer />
    </div>
  )
}
