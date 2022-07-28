import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Link, useStaticQuery, graphql } from "gatsby";



const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchKeyword = searchParams.get('s');

  const data = useStaticQuery(graphql`
  {
    allBlogDataJson {
      edges {
        node {
          slug
          H1
          excerpt
        }
      }
    }
    allCategoriesJson {
      nodes {
        content {
          posts {
            H1
            slug
            excerpt
          }
        }
      }
    }
  }
`);

  if (searchKeyword !== null){
  
  var numb = 0




  return (
    <div className="container-fluid p-0">
          <div className="row justify-content-center sec-color">
                  <h1 className="text-center py-5">Search results:</h1>
          </div>
    <div className="row single-post m-auto justify-content-between mt-2 mt-lg-5">
      {data.allBlogDataJson.edges.map((data, index) => {
        if (data.node.H1.toLowerCase().includes(searchKeyword.toLowerCase()))
        {
        var excerpto = data.node.excerpt.substring(0,100).split(' ')
        {numb = numb+index}
        return (    
          
          <div className="col-12 col-md-6 col-lg-4 p-0 card-holder" key={`content_item_${numb}`}>
            
            <div className="card-body my-3 sec-color">
            <Link to={`/${data.node.slug}`} className='linkcard'>
              <h2 className="card-title">{data.node.H1}</h2>
              <p className="card-text">{excerpto.slice(0, excerpto.length - 1).join(' ')} ...</p>
              
              <div  className="card-link">Read More →</div>
              </Link>
            </div>
          </div>
        );

        
      }})}




    {data.allCategoriesJson.nodes.map((node, index) => {
            let resulting = node.content.map((archive, index) => {
              let result = archive.posts.map((post, index) => {
                if (post.H1.toLowerCase().includes(searchKeyword.toLowerCase()))
              {
                var excerpto = post.excerpt.substring(0,100).split(' ')
                {numb = numb+index}

                return (    
                  <div className="col-12 col-md-6 col-lg-4 p-0 card-holder" key={`content_item_${numb}`}>
                    <div className="card-body my-3 sec-color">
                    <Link to={`/${post.slug}`} className='linkcard'>
                      <h2 className="card-title">{post.H1}</h2>
                      <p className="card-text">{excerpto.slice(0, excerpto.length - 1).join(' ')} ...</p>
                      
                      <div  className="card-link">Read More →</div>
                      </Link>
                    </div>
                  </div>
                );
            }})
                  
            return result})      
            return resulting})}

      
<div className="col-12 col-md-6 col-lg-4 p-0 card-holder" key="added"></div>

    </div>
  </div>






  );}
  else{return null}
};

export default Search;