
const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);


exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
 
  
  const {createRedirect} = actions;
  createRedirect({ fromPath: '/sitemap', toPath: '/sitemap.xml', isPermanent: true });

  // Define a template for blog post
  const blogPost = path.resolve(`./src/templates/blog-post.js`);
  const catPage = path.resolve(`./src/templates/cat.js`);
  const tosPage = path.resolve(`./src/templates/tos.js`);

  var footers = ['disclaimer', 'tos', 'privacy']
  // Get all markdown blog posts sorted by date
  const result = await graphql(
    `
      {
        allBlogDataJson {
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
            }
          }
        }
      }
    `
  );

  const categories = await graphql(
    `
    {
      allCategoriesJson {
        edges {
          node {
            category
            content {
              name
              slug
            }
          }
        }
      }
    }
    
    `
  );

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    );
    return;
  }

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  result.data.allBlogDataJson.edges.forEach((edge, index) => {
    createPage({
      path: `/${edge.node.slug.toLowerCase().replace(/\s/g, "-")}/`,
      component: blogPost,
      context: {
        slug: edge.node.slug.toLowerCase().replace(/\s/g, "-"),
        lastmoddate: edge.node.date
      },
    });

  });

  categories.data.allCategoriesJson.edges.forEach((edge, index) => {
    edge.node.content.forEach((cont,index) => {

      createPage({
        path: `/${edge.node.category.toLowerCase()}/${cont.slug.toLowerCase().replace(/\s/g, "-")}`,
        component: catPage,
        context: {
          slug: cont.slug.toLowerCase().replace(/\s/g, "-"),
          categoryname: edge.node.category
        },
      });
    })


    })


    footers.forEach((data, index) => {
      createPage({
        path: `/${data}`,
        component: tosPage,
        context: {
          slug: data
        },
      });
  
    });
};
