import * as React from "react";
import Layout from "../components/layout";
import Seo from '../components/seo/seoall'
import { graphql } from "gatsby"


const IndexPage = ({data}) => {



  return (
    <div>
      <Layout>
      <Seo description={data.allDescriptionsJson.nodes[0].description} slug={data.allDescriptionsJson.nodes[0].page_location} category={data.allDescriptionsJson.nodes[0].page_location} />
        <div className="container-fluid p-0">
            <div className="row justify-content-center sec-color">
                <h1 className="text-center py-5">
                  {(data.allDescriptionsJson.nodes[0].page_location==='privacy')?'Privacy Policy':null}
                  {(data.allDescriptionsJson.nodes[0].page_location==='disclaimer')?'Disclaimer':null}
                  {(data.allDescriptionsJson.nodes[0].page_location==='tos')?'Terms of Service':null}
                  
                  
                  </h1>
            </div>
            <div className="row justify-content-center single-post m-auto my-5">
                <div className="col-12 p-0">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Viverra nibh cras pulvinar mattis nunc sed. Orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero. Amet nulla facilisi morbi tempus. Senectus et netus et malesuada. Vitae ultricies leo integer malesuada nunc vel. Velit egestas dui id ornare arcu odio ut sem nulla. Id consectetur purus ut faucibus pulvinar elementum integer enim. Id interdum velit laoreet id. Sed risus ultricies tristique nulla aliquet enim tortor at auctor. Tortor vitae purus faucibus ornare suspendisse. Etiam non quam lacus suspendisse faucibus interdum posuere lorem. Neque volutpat ac tincidunt vitae semper quis lectus nulla. Dictum non consectetur a erat nam at lectus urna duis.
                    </p>
                    <p>
                    Nec ultrices dui sapien eget mi proin sed libero enim. Nec ultrices dui sapien eget. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Non diam phasellus vestibulum lorem. Tempus urna et pharetra pharetra massa. Fermentum dui faucibus in ornare quam viverra. Tincidunt ornare massa eget egestas purus. Volutpat lacus laoreet non curabitur gravida. Sed velit dignissim sodales ut eu. Elementum nisi quis eleifend quam adipiscing. Et molestie ac feugiat sed lectus vestibulum mattis. Aliquam sem et tortor consequat. Neque sodales ut etiam sit. Diam vulputate ut pharetra sit amet aliquam id diam. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Vitae elementum curabitur vitae nunc sed velit dignissim sodales. Ultrices eros in cursus turpis massa tincidunt dui ut ornare. Eu facilisis sed odio morbi quis commodo odio aenean.
                    </p>
                </div>
            </div>
        


        </div>
      </Layout>
    </div>
  );
};

export default IndexPage;

export   const query = graphql`
query ($slug: String!){
  allDescriptionsJson(filter: {page_location: {eq: $slug}}) {
    nodes {
      page_location
      description
    }
  }
}


`;
