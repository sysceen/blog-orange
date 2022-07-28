/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

 import * as React from "react"
 import PropTypes from "prop-types"
 import { Helmet} from "react-helmet"
 

 const isBrowser = typeof window !== "undefined"
 const Seo = ({ description, lang, title, img, time, category, slug }) => {


  var sitename = process.env.GATSBY_URL.replace('https://','').replace('.com','')
  var fullurl = process.env.GATSBY_URL + slug + '/'
  if (slug == ''){fullurl = process.env.GATSBY_URL}
  var homepath = ''
  if (isBrowser){
    sitename = window.location.hostname
    fullurl = window.location.href
    homepath = window.location.href.replace(window.location.pathname,'')
  }

   const pageDescription = description 
   
   
   return (
     <Helmet
       htmlAttributes={{
         lang,
       }}

       link={[{ rel: 'canonical', href: fullurl }]}
       title={category}

       titleTemplate={sitename ? `%s - ${sitename}` : null}
       
       meta={[
         {
           name: `description`,
           content: category + ' - ' + pageDescription,
         },
         {
           property: `robots`,
           content: 'follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
         },
         {
           property: `og:locale`,
           content: "en_US",
         },
         {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:title`,
          content: category + ' - ' + sitename,
        },
         {
           property: `og:description`,
           content: pageDescription,
         },
         {
            property: `og:url`,
            content: fullurl,
         },
         {
            name: `og:site_name`,
            content: sitename,
          },
          {
            name: `twitter:card`,
            content: 'summary_large_image',
          },
          {
            name: `twitter:title`,
            content: category + ' - ' + sitename,
          },
          {
            name: `twitter:description`,
            content: pageDescription,
          },
         {
           name: `twitter:label1`,
           content: 'Written by',
         },
         {
           name: `twitter:data1`,
           content: 'admin',
         },
         {
            name: `twitter:label2`,
            content: 'Time to read',
          },
          {
            name: `twitter:data2`,
            content: '4 minutes',
          }
       ]}


     >
      <script type="application/ld+json">
        {`{
        "@context": "https://schema.org/",
        "@graph": [
            { "@type": ["Person", "Organization"], "@id": "${homepath}#person", "name": "Ayush" },
            {
              "@context": "https://schema.org/",
              "@type": "WebSite",
              "url": "${homepath}",
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "${homepath}search/?s={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            },
            {
                "@type": "ImageObject",
                "@id": "${homepath}",
                "url": "${homepath}",
                "width": "200",
                "height": "200",
                "inLanguage": "en-US"
            },
            {
                "@type": "Person",
                "@id": "${homepath}author/",
                "name": "admin",
                "url": "${homepath}author/",
                "image": {
                    "@type": "ImageObject",
                    "@id": "https://secure.gravatar.com/avatar/a037394d75a25a500259f54b94b393ce?s=96&amp;d=mm&amp;r=g",
                    "url": "https://secure.gravatar.com/avatar/a037394d75a25a500259f54b94b393ce?s=96&amp;d=mm&amp;r=g",
                    "caption": "admin",
                    "inLanguage": "en-US"
                },
                "sameAs": ["${homepath}"]
            },
            {
                "@type": "WebPage",
                "@id": "${homepath}#webpage",
                "url": "${homepath}",
                "name": "${title} - ${sitename}",
                "datePublished": "2021-04-26T20:52:11+00:00",
                "dateModified": "2021-07-19T04:51:27+00:00",
                "author": { "@id": "${homepath}author" },
                "isPartOf": { "@id": "${homepath}#website" },
                "inLanguage": "en-US"
            }
        ]
    }`}
      </script>
      
      </Helmet>
   )
 }
 
 Seo.defaultProps = {
   lang: `en`,
   meta: [],
   description: ``,
 }
 
 Seo.propTypes = {
   description: PropTypes.string,
   lang: PropTypes.string,
   meta: PropTypes.arrayOf(PropTypes.object),
 }
 
 export default Seo