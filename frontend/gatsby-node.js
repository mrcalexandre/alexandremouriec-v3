exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(
    `
      {
        experiences: allStrapiExperience {
          edges {
            node {
              strapiId
            }
          }
        }
        projects: allStrapiProject {
          edges {
            node {
              strapiId
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }
}
