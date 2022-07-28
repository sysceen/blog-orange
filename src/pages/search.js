import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from '../components/seo/seoall'


import Search from '../components/search';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const IndexPage = () => {


  const data = useStaticQuery(graphql`
    query {
      allBlogDataJson {
        edges {
          node {
            slug
            H1 
            excerpt
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
  const isBrowser = typeof window !== "undefined"


  return (
    <div>
      <Layout>
      <Seo slug={'/search/'} category='Search' />
      {(isBrowser)?
      <BrowserRouter>
        <Routes>
          <Route path="/search/" element={<Search />}></Route>
        </Routes>
      </BrowserRouter>:null}

      </Layout>
    </div>
  );
};

export default IndexPage;
