import Head from 'next/head'

type Props = {
  title?: string
}

const MetaHead = ({ title }: Props) => {
  // All shared metatags will be here
  return (
    <>
      <Head>
        <title>{title || 'ArtPay Demo'}</title>
        <link rel="icon" href="/favicon.ico" />

        <link href="https://fonts.googleapis.com/css?family=Inter+Inline" rel="stylesheet"/>

      </Head>
    </>
  )
}

export default MetaHead
