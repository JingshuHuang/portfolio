import { gql } from "@apollo/client";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Queries: {
    getWorks: gql`
      query GetWorks($first: Int!, $after: String) {
        worksConnection(first: $first, after: $after, orderBy: createdAt_DESC) {
          edges {
            node {
              id
              title
              workUrl
              images(first: 1) {
                url
              }
              workTabs {
                tab
              }
            }
          }
          pageInfo {
            hasNextPage
            endCursor
          }
        }
      }
    `,

    getTabs: gql`
      query GetTabs {
        workTabs {
          tab
        }
      }
    `,

    getSingleWork: gql`
      query GetSingleWork($projectId: ID) {
        work(where: { id: $projectId }) {
          id
          date
          description
          images {
            url
          }
          techStack
          title
          userActions
          workUrl
          githubUrl
          ownerName
          clientName
        }
      }
    `,
  },
};
