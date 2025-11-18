import { JSX } from "@emotion/react/jsx-runtime";
import { LayoutProps } from "./layout.props";
import { Box } from "@mui/material";
import { Footer, Navbar } from "../components";

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Navbar />
      <Box sx={{ background: "#141414" }}> {children}</Box>
      <Footer />
    </>
  );
};

export default Layout;
