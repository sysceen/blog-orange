import * as React from "react";
import Layout from "../components/layout";
import { Link, graphql } from "gatsby";
import Seo from '../components/seo/seoall'

const BlogPostTemplate = ({ data }) => {
  return (
    <div>
      <Layout>
      <Seo description={data.allDescriptionsJson.nodes[0].description} slug={data.allCategoriesJson.edges[0].node.category.toLowerCase() + '/' + data.allCategoriesJson.edges[0].node.content[0].slug} category={data.allCategoriesJson.edges[0].node.category + ' ' + data.allCategoriesJson.edges[0].node.content[0].name} />

        <div className="container-fluid p-0">
          <br />
          <br />
          <div className="row single-post m-auto justify-content-between">
            {data.allCategoriesJson.edges[0].node.content[0].posts.map((data, index) => {
              var excerpto = data.excerpt.substring(0,100).split(' ')
              var empt = 58 - data.H1.length
              if (empt>0){data.H1 = data.H1 + ' ' + '\u00a0'.repeat(empt*2)}

              return (
                <div className="col-12 col-md-6 col-lg-4 p-0 card-holder" key={`content_item_${index}`}>
                  <div className="card-body me-md-4 mx-2 mx-md-0 my-3 sec-color">
                    <Link to={`/${data.slug}/`} className='linkcard'>
                    <h2 className="card-title">{data.H1}</h2>
                    <p className="card-text">{excerpto.slice(0, excerpto.length - 1).join(' ')} ...</p>
                    
                    <div className="card-link">Read More →</div>
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

export default BlogPostTemplate;

export const query = graphql`
  query ($slug: String!, $categoryname: String!) {
    allCategoriesJson(filter: {category: {eq: $categoryname}, content: {elemMatch: {slug: {eq: $slug}}}}
    ) {
      edges {
        node {
          category
          content {
            name
            slug
            posts {
              H1
              H1_content
              H2_1
              H2_1_content
              H2_2
              H2_2_content
              H2_3
              H2_4
              H2_3_content
              IMAGE_URL
              H2_4_content
              date
              category
              excerpt
              slug
            }
          }
        }
      }
    }
    allDescriptionsJson(filter: {page_location: {eq: "archives"}}) {
      nodes {
        page_location
        description
          }
        }
  }
`;
