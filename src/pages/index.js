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
          <div className="single-post">





            <div className="row mt-2 mt-lg-5 me-0">
              <div className="col-8">
                <div className="row">


                  {data.allBlogDataJson.edges.slice(0,5).map((data, index) => {
                    var excerpto = data.node.excerpt.substring(0,100).split(' ')
                    
                    return (    
                      <>
                      <Link to={`/${data.node.slug}/`} className='linkcard'>
                      <div className="row pb-4" key={`content_item_${index}`}>
                        <div className="col-3">
                          <img class="" src={data.node.IMAGE_URL}  width="100%" height="100%" alt="Card image cap"/>

                        </div>
                        <div className="col-9">

                            <div className="card-body ps-1 sec-color py-2 pe-0">
                            <h2 className="card-big-title">{data.node.H1}</h2>
                            <p className="card-text" id="cardo">{excerpto.slice(0, excerpto.length - 1).join(' ')} ...</p>
                            
                            <div  className="card-link">Read More →</div>
                            
                          
                          </div>
                        </div>
                      </div>
                      </Link>
                      </>
                    );
                  })}


                </div>
              </div>
              <div className="col-4 ps-5">
                <div className="row">


                  {data.allBlogDataJson.edges.slice(0,2).map((data, index) => {
                    var excerpto = data.node.excerpt.substring(0,100).split(' ')
                    
                    return (    
                      <>
                      <div className="col-12 p-0" key={`content_item_${index}`}>
                        <img class="card-img-top" src={data.node.IMAGE_URL} alt="Card image cap"/>

                        <div className="card-body mb-3 sec-color bg-white">
                        <Link to={`/${data.node.slug}/`} className='linkcard'>

                          <h2 className="card-title">{data.node.H1}</h2>
                          <p className="card-text">{excerpto.slice(0, excerpto.length - 1).join(' ')} ...</p>
                          
                          </Link>
                        </div>
                      </div>
                      </>
                    );
                  })}

                  
                </div>
              </div>
            </div>


          
























          <div className="row mt-2 mt-lg-5 me-0">
            <div className="col-12">
              <h2 className="cat-small-title mb-4 pb-2">Category Name</h2>
              <div className="row justify-content-between">



                  {data.allBlogDataJson.edges.slice(0,4).map((data, index) => {
                        var excerpto = data.node.excerpt.substring(0,75).split(' ')
                        
                        return (    
                          <>
                          <div className="col-6" style={{width:"48%"}}>

                            <Link to={`/${data.node.slug}/`} className='linkcard'>
                              <div className="row pb-4" key={`content_item_${index}`}>
                                <div className="col-4">
                                  <img class="" src={data.node.IMAGE_URL} width="143px" height="94px" alt="Card image cap"/>

                                </div>
                                <div className="col-8 px-0 m-auto">

                                    <div className="card-body py-0 sec-color">
                                    <h2 className="card-title">{data.node.H1}</h2>
                                    <p className="card-text">{excerpto.slice(0, excerpto.length - 1).join(' ')} ...</p>
                                    
                                    
                                  
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </div>
                          </>
                        );
                      })}

              </div>
            </div>
          </div>

































          <div className="row mt-2 mt-lg-5 me-0">


              <div className="col-4">
                <div className="row">

<ins class="adsbygoogle"
     style={{display:"block"}}
     data-ad-client="ca-pub-9808253958086114"
     data-ad-slot="5972256991"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>


                {data.allBlogDataJson.edges.slice(0,3).map((data, index) => {
              var excerpto = data.node.excerpt.substring(0,100).split(' ')
              
              return (    
                <div className="col-12 p-0 pe-3" key={`content_item_${index}`}>
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


          

            <div className="col-8">
                <div className="row">
                  <div className="row pb-5 justify-content-end">
                      <div className="col-11 cat-title-name">
                        Popular Articles
                      </div>
                    </div>



                  {data.allBlogDataJson.edges.slice(0,7).map((data, index) => {
                    var excerpto = data.node.excerpt.substring(0,100).split(' ')
                    
                    return (    
                      <>
                      <Link to={`/${data.node.slug}/`} className='linkcard'>
                      <div className="row pb-3 justify-content-end" key={`content_item_${index}`}>
                        <div className="col-3">
                          <img class="" src={data.node.IMAGE_URL}  width="100%" height="100%" alt="Card image cap"/>

                        </div>
                        <div className="col-8 px-2">

                            <div className="card-body ps-0 sec-color py-1">
                            <h2 className="card-big-title">{data.node.H1}</h2>
                            <p className="card-text" id="cardo">{excerpto.slice(0, excerpto.length - 1).join(' ')} ...</p>
                            
                            <div  className="card-link">Read More →</div>
                            
                          
                          </div>
                        </div>
                      </div>
                      </Link>
                      </>
                    );
                  })}


                </div>
              </div>

              </div>






          </div>

        </div>
      </Layout>
      <script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
    </div>
  );
};

export default IndexPage;
