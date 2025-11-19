import { blogPosts } from "@/src/config/constants";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

const Content = () => {
  return (
    <Box width={"70%"}>
      {blogPosts.map((item) => {
        return (
          <Box
            key={item?.title}
            sx={{
              marginTop: "20px",
              background: "rgba(0,0,0,.7)",
              borderRadius: "8px",
              padding: "20px",
              boxShadow: "0 8px 16px rgba(255,255,255,.075)",
            }}
          >
            <Box position={"relative"} width={"100%"} height={"50vh"}>
              <Image
                fill
                alt={item?.title}
                src={item?.img}
                style={{ objectFit: "cover", borderRadius: "10px" }}
              />
            </Box>
            <Typography color="white" variant="h4">
              {item?.title}
            </Typography>
            <Typography color="rgba(255,255,255,.4)" variant="body1">
              {item?.expert}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default Content;
