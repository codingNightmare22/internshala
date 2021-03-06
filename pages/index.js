import Head from 'next/head'
import Dashboard from './dashboard';
import Navbar from "./navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Internshala</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Dashboard />
    </div>
  )
}
