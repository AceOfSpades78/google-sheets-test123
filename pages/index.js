import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Système Double Stimulation!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="GB Performance!" />
        <p className="description"></p>
        <iframe width="1200" width="1200" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQhruFCVG80JiPbbyFhR8nXhExDx2nvGa64D5SwXbsO9ysxBEl8rZCRJCUukcVaMLMFsbxDyVknhcb1/pubhtml?widget=false&amp;range=A1:BT108&amp;headers=false"></iframe>
      <Footer />
    </div>
  )
}
