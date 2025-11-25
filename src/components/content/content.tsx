import { blogPosts } from "@/src/config/constants";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

const Content = () => {
  return (
    <Box sx={{ width: { lg: "100%", md: '100%', sm: '100%', xs: '100%' } }}>
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
            <Box position={"relative"} width={"100%"} height={{ xs: '30vh', md: "50vh" }} overflow={'hidden'}>
              <Image
                fill
                alt={item?.title}
                src={item?.img}
                className="img-card"
              />

            </Box>
            <Typography color="white" sx={{ fontSize: { xs: '18px', md: '30px' } }}>
              {item?.title}
            </Typography>
            <Typography color="rgba(255,255,255,.4)" sx={{ fontSize: { xs: '14px', md: '24px' } }}>
              {item?.expert}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default Content;
