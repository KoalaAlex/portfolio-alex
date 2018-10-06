import React from 'react';
import Helmet from 'react-helmet';
import config from '../../config/website';

//import faviconIco from '../../static/favicons/favicon.ico';

const title = config.siteTitle;
const description = config.siteDescription;
const realPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix;
const image = config.siteUrl + realPrefix + config.siteLogo;
const blogURL = config.siteUrl + config.pathPrefix;
const schemaOrgJSONLD = [
  {
    '@context': 'http://schema.org',
    '@type': 'WebSite',
    url: blogURL,
    name: title,
    alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
  },
];

//const SEO = () => {
class SEO extends React.PureComponent {
  render(){
    return (
      <Helmet>
        <html lang={config.siteLanguage} />
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.jpg" />
        <link rel="icon" type="image/jpg" sizes="32x32" href="/favicons/favicon-32x32.jpg" />
        <link rel="icon" type="image/jpg" sizes="16x16" href="/favicons/favicon-16x16.jpg" />
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <meta name="msapplication-TileColor" content={config.backgroundColor} />
        <meta name="msapplication-config" content="browserconfig.xml" />
        <meta name="description" content={description} />
        <meta name="image" content={image} />
        <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>
        <meta property="og:locale" content={config.ogLanguage} />
        <meta property="og:site_name" content={config.ogSiteName} />
        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="{siteUrl}}" />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="fb:app_id" content={config.siteFBAppID ? config.siteFBAppID : ''} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={config.userTwitter ? config.userTwitter : ''} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Helmet>
    );
  }
};

export default SEO;
