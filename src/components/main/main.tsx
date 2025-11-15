import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Avatar, Box, Typography } from "@mui/material";
import Image from "next/image";
import { format } from "date-fns";
const data = [
  {
    img: "/react.jpg", // frontend performance optimizatsiyasi uchun maydon
    title: "React’da komponentlarni samarali tashkil qilish",
    expert:
      "Kod strukturasi va komponent ierarxiyasini to‘g‘ri ajratish loyihani boshqarishni osonlashtiradi.",
    author: {
      image: "https://picsum.photos/id/1005/100",
      name: "Anvar Mirsaatov",
    },
  },
  {
    img: "/seo.jpg", // SEO / Next.js sahifasi uchun mos rasm
    title: "Next.js’da SEO optimizatsiyasi bo‘yicha amaliy maslahatlar",
    expert:
      "Server-side rendering yordamida sahifalar tezroq yuklanadi va qidiruv tizimlari uchun qulay bo‘ladi.",
    author: {
      image: "https://picsum.photos/id/1027/100",
      name: "Dilnoza Karimova",
    },
  },
  {
    img: "/ux.jpg", // UI/UX dizayn uchun mos rasm
    title: "UI/UX dizaynda minimalizm kuchi",
    expert:
      "Minimal dizayn foydalanuvchi e’tiborini muhim elementlarga qaratadi va interfeysni soddalashtiradi.",
    author: {
      image: "https://picsum.photos/id/1001/100",
      name: "Azizbek Qodirov",
    },
  },
  {
    img: "/ts.jpg",
    title: "TypeScript bilan React loyihalarini himoyalash",
    expert:
      "TypeScript yordamida xatolarni erta aniqlash va jamoaviy kod sifatini yaxshilash mumkin.",
    author: {
      image: "https://picsum.photos/id/1011/100",
      name: "Malika Islomova",
    },
  },
  {
    img: "/front.jpg",
    title: "Frontend performance optimizatsiyasi: real usullar",
    expert:
      "Lazy loading, memoization va kod splitting orqali ilovangizni tezlashtiring.",
    author: {
      image: "https://picsum.photos/id/1012/100",
      name: "Rustam Yusupov",
    },
  },
];

const Main = () => {
  return (
    <Box height={"70vh"} sx={{ background: "white" }}>
      <Carousel
        responsive={{
          mobile: {
            breakpoint: { max: 4000, min: 0 },
            items: 1,
            slidesToSlide: 1, // optional, default to 1.
          },
        }}
      >
        {data?.map((item) => {
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
                      <Typography>{item.author.name}</Typography>
                      <Typography>
                        {format(new Date(), "dd.mmm.yyyy")}
                      </Typography>
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

export default Main;
