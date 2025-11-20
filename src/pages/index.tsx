import { Box, Button } from "@mui/material";
import Layout from "../layout/layout";
import { Content, Hero, SideBar } from "../components";

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Box sx={{ display: "flex", gap: '20px', alignItems: { lg: "flex-start", md: 'center' }, flexDirection: { xs: 'column', sm: 'column', md: 'column ', lg: 'row' } }} >
        <Box sx={{ transition: "ease 1s", position: { lg: "sticky", md: 'static' }, top: { lg: "100px" }, width: { lg: "30%", md: '100%' } }}>
          <SideBar />
        </Box>
        <Content />
      </Box>
    </Layout>
  );
};

export default IndexPage;
