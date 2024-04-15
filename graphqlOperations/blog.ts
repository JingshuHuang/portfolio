import { gql } from "@apollo/client";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Queries: {
    getBlogs: gql`
      query GetBlogs($skip: Int!, $first: Int!) {
        blogs(skip: $skip, first: $first, orderBy: createdAt_DESC) {
          id
          blogUrl
          dated
          description
          title
          thumbnail {
            url
          }
        }
      }
    `,

    getTotalRecords: gql`
      query GetTotalRecords {
        blogsConnection {
          aggregate {
            count
          }
        }
      }
    `,
  },
};
