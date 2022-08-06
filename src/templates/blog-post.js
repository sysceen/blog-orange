import React from "react";
import { graphql, Link } from "gatsby";
// import Image from "gatsby-image";
import Layout from "../components/layout";
import Seo from "../components/seo/seo";
import Twitterimg from "../images/twitter.png"
import Facebookimg from "../images/facebook.png"
import Linkedinimg from "../images/linkedin.png"
import Pinterestimg from "../images/pinterest.png"



const BlogPostTemplate = ({ data }) => {
  const post = data.allBlogDataJson.edges[0].node;
  return (
    <Layout>



<Seo title={post.H1} h1={post.H1} description={post.excerpt} slug={post.slug} img={post.IMAGE_URL} time={post.date} category={post.category} />





      <div className="single-post">
        <div className="container-fluid p-0 justify-content-between d-flex flex-row">
          <div className="col-8 pe-2">
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





          <div className="col-4 ps-4 pt-5">
            <p id="sidebar-cat">Share About Us</p>
            <hr/>  
            <div className="my-4">
              <img className="me-3" src={Twitterimg} width='40px' height='40px' />
              <img className="me-3" src={Facebookimg} width='40px' height='40px' />
              <img className="me-3" src={Linkedinimg} width='40px' height='40px' />
              <img className="me-3" src={Pinterestimg} width='40px' height='40px' />
            </div>
            <p id="sidebar-cat">Recent Articles</p>

            <hr className="mb-4"/>  

            {data.restarticles.nodes.map((data, index) => {

              return(
                <>
                
                <Link to={`/${data.slug}/`} className='linkcard'>
                      <div className="row pb-4" key={`content_item_${index}`}>
                        <div className="col-5">
                          <img src={data.IMAGE_URL} alt="Card image cap" style={{width:'140px',height:'140px'}}/>

                        </div>
                        <div className="col-7 m-auto">

                            <h2 className="ps-1 related-title">{data.H1}</h2>                            
                            
                          
                        </div>
                      </div>
                      </Link>


                </>
              )
            })}

                
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
    restarticles: allBlogDataJson(limit: 5,filter: { slug: { ne: $slug } }) {
      nodes {
        slug
        H1
        IMAGE_URL
      }
    }
  }
  
  
`;
