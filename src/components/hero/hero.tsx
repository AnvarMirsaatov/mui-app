import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Avatar, Box, Typography } from "@mui/material";
import Image from "next/image";
import { format } from "date-fns";
import { blogPosts } from "@/src/config/constants";

const Hero = () => {
  return (
    <Box height={"70vh"} sx={{ background: "white" }}>
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
                    width={"70%"}
                    sx={{
                      top: "50%",
                      transform: "translateY(-50%)",
                      opacity: "1",
                    }}
                    color={"white"}
                    zIndex={999}
                  >
                    <Typography variant="h2">{item.title}</Typography>
                    <Typography variant="h5">{item.expert}</Typography>
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
      </Carousel>
    </Box>
  );
};

export default Hero;
