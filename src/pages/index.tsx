import { Box, Button } from "@mui/material";
import Layout from "../layout/layout";
import { Content, Hero, SideBar } from "../components";
import { useEffect } from "react";
import { BlogService } from "../services/blog.service";
import { blogPosts } from "../config/constants";

const IndexPage = () => {
  // const IndexPage = (props) => {

  // useEffect(() => {
  //   BlogService.getAllBlogs()
  //     .then(res => {
  //       console.log("FULL GRAPHQL RESULT:", JSON.stringify(res, null, 2));
  //     })
  //     .catch(err => console.error("GRAPHQL ERROR:", err));
  // }, []);

  // useEffect(() => {
  //   BlogService.getAllBlogs()
  //     .then(res => console.log("Blogs:", res))
  //     .catch(err => console.error("GRAPHQL ERROR:", err));
  // }, []);

  useEffect(() => {
    BlogService.getAllBlogs().then(data => { console.log(data) })
  }, [])


  const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT as string;
  console.log('graphqlAPI =>', graphqlAPI);


  return (
    <Layout>
      <Hero />
      <Box sx={{ display: "flex", gap: '20px', alignItems: { lg: "flex-start", md: 'center' }, flexDirection: { xs: 'column', sm: 'column', md: 'column ', lg: 'row' } }} >
        <Box sx={{ transition: "ease 1s", position: { lg: "sticky", md: 'static' }, top: { lg: "100px" }, width: { lg: "40%", md: '100%' } }}>
          <SideBar />
        </Box>
        <Content />
      </Box>
    </Layout>
  );
};

export default IndexPage;


// export const getServerSideProps = async () => {
//   return {
//     props: {
//       mesage: "Hello from server side",
//     },
//   };
// }