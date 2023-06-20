import Head from "next/head";

interface Props {
  title: string;
  desc: string;
  og: boolean;
}

const CustumHead = ({ title, desc, og }: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={desc} />
      {og && (
        <>
          <meta property="og:title" content={title} />
          <meta property="og:description" content={desc} />
          <meta
            property="og:image"
            content="https://rdtech-code.vercel.app/open-graph.png"
          />
          <meta property="og:url" content="https://rdtech-code.vercel.app//" />
          <meta property="og:type" content="website" />
          <meta
            property="og:site_name"
            content="Rudy Dupuis - Développeur JavaScript et UX Designer"
          />
        </>
      )}
    </Head>
  );
};

export default CustumHead;
