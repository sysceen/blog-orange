import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from '../components/seo/seoall'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
  {
    allCategoriesJson(filter: {category: {eq: "Faqs"}}) {
      nodes {
        category
        content {
          name
          slug
          posts {
            slug
          }
        }
      }
    }
    allDescriptionsJson(filter: {page_location: {eq: "faqs"}}) {
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
  var categ =data.allCategoriesJson.nodes[0].category.toLowerCase()
  return (
    <div>
      <Layout>
      <Seo description={data.allCategoriesJson.nodes[0].description} slug={data.allDescriptionsJson.nodes[0].page_location} category={data.allDescriptionsJson.nodes[0].page_location} />

        <div className="container-fluid">
          <div className="row justify-content-center sec-color">
                  <h1 className="text-center py-5">FAQs Articles</h1>
          </div>
          <div className="archive-table single-post py-5 m-auto">
            {data.allCategoriesJson.nodes[0].content.map((data, index) => {
              if (data.posts.length!== 0){
              return (
                <Link to={`/${categ}/${data.slug}/`} className="table_row m-auto single-post" key={`content_item_${index}`}>
                  <div width="100%">{data.name}</div>
                  <div width="100%">{data.posts.length}</div>
                </Link>
              );}else{return(null)}
            })}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default IndexPage;
