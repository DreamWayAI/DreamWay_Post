import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>DreamWay AI Publisher</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
      <div className="min-h-screen bg-dw-bg text-dw-text">
        <header className="bg-dw-panel shadow-lg p-4 text-dw-accent text-2xl font-bold neon-text text-center">
          DreamWay AI Publisher
        </header>
        <main>{children}</main>
      </div>
    </>
  );
}