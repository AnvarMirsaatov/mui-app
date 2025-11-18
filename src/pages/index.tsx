import { Box, Button } from "@mui/material";
import Layout from "../layout/layout";
import { Content, Hero, SideBar } from "../components";

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Box sx={{ display: "flex", gap: 20 }}>
        <SideBar />
        <Content />
      </Box>
    </Layout>
  );
};

export default IndexPage;
