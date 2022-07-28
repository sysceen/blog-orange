import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from '../components/seo/seoall'





const IndexPage = () => {


  const data = useStaticQuery(graphql`
    query {
      allBlogDataJson {
        edges {
          node {
            slug
            H1 
            excerpt
            IMAGE_URL
          }
        }
      }
      
        allDescriptionsJson(filter: {page_location: {eq: "homepage"}}) {
          nodes {
            page_location
            description
              }
            }
          
    }
  `);
    

  if (data.errors) {
    console.log("Error retrieving data", data.errors);
    return;
  }
  

  return (
    <div>




      <Layout>
      <Seo description={data.allDescriptionsJson.nodes[0].description} slug='' category={data.allDescriptionsJson.nodes[0].page_location} />

        <div className="container-fluid p-0">
          <div className="row single-post m-auto justify-content-between mt-2 mt-lg-5">
            {data.allBlogDataJson.edges.map((data, index) => {
              var excerpto = data.node.excerpt.substring(0,100).split(' ')
              
              return (    
                <div className="col-12 col-md-6 col-lg-4 p-0 card-holder" key={`content_item_${index}`}>
                  <div className="card-body my-3 sec-color">
                  <Link to={`/${data.node.slug}/`} className='linkcard'>
                    <h2 className="card-title">{data.node.H1}</h2>
                    <p className="card-text">{excerpto.slice(0, excerpto.length - 1).join(' ')} ...</p>
                    
                    <div  className="card-link">Read More →</div>
                    </Link>
                  </div>
                </div>
              );
            })}
            <div className="col-12 col-md-6 col-lg-4 p-0 card-holder" key="added"></div>

          </div>
        </div>
      </Layout>
    </div>
  );
};

export default IndexPage;
