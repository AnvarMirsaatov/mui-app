import { JSX } from "@emotion/react/jsx-runtime";
import { LayoutProps } from "./layout.props";
import { Box } from "@mui/material";
import { Footer, Main, Navbar } from "../components";

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Navbar />
      <Box height="100vh">
        <Main />
        {children}
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
