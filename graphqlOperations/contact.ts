import { gql } from "@apollo/client";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Mutation: {
    sendMessage: gql`
      mutation SendMessage(
        $fullName: String!
        $email: String!
        $message: String!
      ) {
        createContact(
          data: { fullName: $fullName, email: $email, message: $message }
        ) {
          fullName
          email
          message
        }
      }
    `,
  },
};
