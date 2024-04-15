import { gql } from "@apollo/client";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Queries: {
    getProfile: gql`
      query GetProfile {
        profiles {
          cv
          id
          name
          ownersPhoto {
            url
          }
          bgImages {
            url
          }
          linkedinUrl
        }
      }
    `,

    getNameImage: gql`
      query GetProfile {
        profiles {
          name
          ownersPhoto {
            url
          }
        }
      }
    `,

    getBio: gql`
      query GetBio {
        profiles {
          bio
        }
      }
    `,

    getServices: gql`
      query GetServices {
        services {
          id
          title
          serviceDesc
        }
      }
    `,

    getPrices: gql`
      query GetPrices {
        prices {
          id
          packageName
          packagePrice
          priceType
          freelanceUrl
          packageServices {
            id
            isIncluded
            packageService
          }
        }
      }
    `,

    getTestimonials: gql`
      query GetTestimonials {
        testimonials {
          id
          userName
          userProfession
          quote
          userImage {
            url
          }
        }
      }
    `,
  },
};
