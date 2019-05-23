const path = require('path');

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const productTemplate = path.resolve('src/templates/product.js');
    const blogPostTemplate = path.resolve('src/templates/blogPost.js');

    resolve(
      graphql(
        `
        {
          allContentfulProduct {
            edges {
              node {
                slug
              }
            }
          }
          allContentfulBlogPost {
            edges {
              node {
                slug
              }
            }
          }
        }
        `
      ).then(result => {
        if(result.errors) {
          reject(result.errors);
        }

        const products = result.data.allContentfulProduct.edges;
        const blogPosts = result.data.allContentfulBlogPost.edges;

        products.forEach(({ node }, index) => {
          createPage({
            path: `products/${node.slug}`,
            component: productTemplate,
            context: {
              slug: node.slug
            }
          });
        });

        blogPosts.forEach(({ node }, index) => {
          createPage({
            path: `blog/${node.slug}`,
            component: blogPostTemplate,
            context: {
              slug: node.slug
            }
          });
        });
        
      })
    )
  })
};
