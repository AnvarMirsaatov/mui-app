import { Box, Button } from "@mui/material";
import Layout from "../layout/layout";
import { Content, Hero, SideBar } from "../components";

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Box sx={{ display: "flex", gap: '20px', alignItems: "flex-start" }} >
        <Box sx={{ transition: "ease 1s", position: "sticky", top: "100px", width: "30%" }}>
          <SideBar />
        </Box>
        <Content />
      </Box>
    </Layout>
  );
};

export default IndexPage;
