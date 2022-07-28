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
 const Seo = ({ slug, description, h1, lang, title, img, time, category }) => {


  var sitename = process.env.GATSBY_URL.replace('https://','').replace('.com','')
  var fullurl = process.env.GATSBY_URL + slug + '/'
  if (isBrowser){
    sitename = window.location.hostname
    fullurl = window.location.href
  }

   const pageDescription = description 
   const sitename_slug = sitename.replace(' ','')
   
   
   return (
     <Helmet
       htmlAttributes={{
         lang,
       }}

       link={[{ rel: 'canonical', href: fullurl }]}
       title={title}

       titleTemplate={sitename ? `%s - ${sitename}` : null}
       
       meta={[
         {
           name: `description`,
           content: sitename + ' - ' + pageDescription,
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
          content: `article`,
        },
        {
          property: `og:title`,
          content: title,
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
          property: `og:image`,
          content: img,
         },
         {
            name: `og:site_name`,
            content: sitename,
          },
          {
            name: `article:publisher`,
            content: "https://www.facebook.com/" + sitename_slug,
          },
          {
            name: `article:author`,
            content: "https://www.facebook.com/" + sitename_slug,
          },
          {
            name: `article:section`,
            content: category,
          },
          {
            name: `og:updated_time`,
            content: time,
          },
          {
            name: `article:published_time`,
            content: time,
          },
          {
            name: `article:modified_time`,
            content: time,
          },
          {
            name: `twitter:card`,
            content: 'summary_large_image',
          },
          {
            name: `twitter:title`,
            content: title,
          },
          {
            name: `twitter:description`,
            content: pageDescription,
          },
         {
           name: `twitter:image`,
           content: img,
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
          "@type": "BlogPosting",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.example.com/"
          },
          "headline": "${title} - ${sitename}",
          "description": "${title} - ${description}",
          "image": "${img}",
          "author": {
            "@type": "Person",
            "name": "Admin",
            "url": "https://www.example.com/author-name"
          },
          "publisher": {
            "@type": "Organization",
            "name": "${sitename}",
            "logo": {
              "@type": "ImageObject",
              "url": "https://example.com/logo.jpg"
            }
          },
          "datePublished": "${time}",
          "dateModified": "${time}"
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
   title: PropTypes.string.isRequired,
 }
 
 export default Seo