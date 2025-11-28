import { gql, request } from "graphql-request";

const graphqlAPI = process.env.HYGRAPH_ENDPOINT!;
const token = process.env.HYGRAPH_TOKEN!;

export const BlogService = {
  async getAllBlogs() {
    const query = gql`
      query getBlogs {
        blogs {
          id
          title
          slug
          excerpt
          image {
            url
          }
          author {
            name
            avatar {
              url
            }
          }
          category {
            label
          }
        }
      }
    `;

    const result = await request(
      graphqlAPI,
      query,
      {},
      { Authorization: `Bearer ${token}` }
    );

    console.log("GRAPHQL RAW RESULT:", JSON.stringify(result, null, 2));

    return result;

    // const result = await request(
    //   graphqlAPI,
    //   query,
    //   {},
    //   {
    //     Authorization: `Bearer ${token}`,
    //   }
    // );

    // return result;
  },
};
