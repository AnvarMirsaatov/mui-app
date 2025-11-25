import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Avatar, Box, Typography } from "@mui/material";
import Image from "next/image";
import { format } from "date-fns";
import { blogPosts } from "@/src/config/constants";

const Hero = () => {
  return (
    <Box sx={{ background: "white", height: "70vh" }}>
      <Carousel
        responsive={{
          mobile: {
            breakpoint: { max: 4000, min: 0 },
            items: 1,
            slidesToSlide: 1,
          },
        }}
        autoPlay={true}
        autoPlaySpeed={3000}
        infinite={true}
        transitionDuration={500}
      >
        {blogPosts?.map((item) => {
          return (
            <Box key={item?.title}>
              <Box
                sx={{ position: "relative", width: "100% ", height: "70vh" }}
              >
                <Image
                  src={item.img}
                  alt={item?.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    bottom: "0",
                    right: "0",
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0,0,0,0.5)", // bu yerda faqat fon shaffof
                  }}
                >
                  <Box
                    position={"relative"}
                    paddingLeft={"50px"}
                    sx={{
                      width: { xs: "90%", sm: "80%", md: "70%" },
                      top: "50%",
                      transform: "translateY(-50%)",
                      opacity: "1",
                    }}
                    color={"white"}
                    zIndex={999}
                  >
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "16px",
                          sm: "24px",
                          md: "30px",
                          lg: "40px",
                        },
                        fontWeight: 600,
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{
                        fontSize: {
                          xs: "16px",   // mobile
                          sm: "18px",   // small tablets
                          md: "20px",   // tablets
                          lg: "24px",   // laptop
                          xl: "28px",   // large screens
                        },
                        fontWeight: 500,
                      }}
                    >
                      {item.expert}
                    </Typography>
                    <Box
                      sx={{
                        marginTop: "20px",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <Avatar alt={item.author.name} src={item.author.image} />
                      <Box>
                        <Typography sx={{ color: "#a1a1aa" }}>
                          {item.author.name}
                        </Typography>
                        <Typography sx={{ color: "#a1a1aa" }}>
                          {format(new Date(), "dd.mmm.yyyy")}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Carousel >
    </Box >
  );
};

export default Hero;
