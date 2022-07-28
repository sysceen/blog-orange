import React from "react";
import { graphql } from "gatsby";
// import Image from "gatsby-image";
import Layout from "../components/layout";
import Seo from "../components/seo/seo"



const BlogPostTemplate = ({ data }) => {
  const post = data.allBlogDataJson.edges[0].node;
  return (
    <Layout>



<Seo title={post.H1} h1={post.H1} description={post.excerpt} slug={post.slug} img={post.IMAGE_URL} time={post.date} category={post.category} />





      <div className="single-post">
        <div className="container-fluid p-0 justify-content-between d-flex flex-row">
          <div className="col-9 pe-2">
            <img
              src={post.IMAGE_URL}
              alt={post.H1.replace('?','')}
              width="100%"
              className="pt-5"
            />
            <h1 className="post-title py-4">{post.H1}</h1>
            <p dangerouslySetInnerHTML={{ __html: post.H1_content }}>
              {/* {post.H1_content} */}
            </p>
            <h3>{post.H2_1}</h3>
            <p dangerouslySetInnerHTML={{ __html: post.H2_1_content }}>
              {/* {post.H2_1_content} */}
            </p>
            <h3>{post.H2_2}</h3>
            <p dangerouslySetInnerHTML={{ __html: post.H2_2_content }}>
              {/* {post.H2_2_content} */}
            </p>
            <h3>{post.H2_3}</h3>
            <p dangerouslySetInnerHTML={{ __html: post.H2_3_content }}>
              {/* {post.H2_3_content} */}
            </p>
            {post.hasOwnProperty('H2_4')?
            <><h3>{post.H2_4}</h3>
            <p dangerouslySetInnerHTML={{ __html: post.H2_4_content }}>
              {/* {post.H2_4_content} */}
            </p></>:null}

          </div>





          <div className="col-3 ps-4 pt-5">
            <p>Share About Us</p>
            <hr
              style={{
                backgroundColor: 'black',
                color: 'black',
                height: '2px',
              }}
            />  
            <p>Recent Articles</p>
            <hr
              style={{
                backgroundColor: '#000000',
                color: '#000000',
                height: '2px',
              }}
            />  
                
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPostTemplate;

export const query = graphql`
  query ($slug: String!) {
    allBlogDataJson(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          slug
          H1
          H1_content
          H2_1
          H2_1_content
          H2_2
          H2_2_content
          H2_3
          H2_3_content
          H2_4
          H2_4_content
          IMAGE_URL
          date
          category
          excerpt
        }
      }
    }
  }
`;
