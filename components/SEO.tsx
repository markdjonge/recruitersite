import React from 'react';
import { Head } from 'vite-react-ssg';

interface SEOProps {
  title: string;
  description: string;
  path?: string;
}

/**
 * Zet per pagina de document title en meta description.
 * Werkt via vite-react-ssg ook in de statisch gegenereerde HTML,
 * dus crawlers en AI's zien de juiste titel/description direct.
 */
const SEO: React.FC<SEOProps> = ({ title, description, path }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {path && <link rel="canonical" href={`https://linkedup.online${path}`} />}
    </Head>
  );
};

export default SEO;
