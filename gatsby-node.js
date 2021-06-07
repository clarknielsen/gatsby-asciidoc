const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return graphql(
    `
      {
        allAsciidoc(limit: 1000) {
          edges {
            node {
              id
              pageAttributes {
                path
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    const articleTemplate = path.resolve(`./src/templates/article.js`);

    result.data.allAsciidoc.edges.forEach(edge => {
      createPage({
        path: edge.node.pageAttributes.path,
        component: articleTemplate,
        context: {
          id: edge.node.id
        }
      });
    });
  });
};
