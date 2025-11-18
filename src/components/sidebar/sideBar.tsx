import { blogPosts, navItems } from "@/src/config/constants";
import {
  Avatar,
  Box,
  Button,
  Divider,
  ListItem,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { format } from "date-fns";

import { Fragment } from "react";

const SideBar = () => {
  return (
    <Box width={"30%"}>
      <Box position={"sticky"} top={"20px"} sx={{ transition: "all .3s easy" }}>
        <Box
          padding={"20px"}
          border={"1px solid gray"}
          marginTop={"20px"}
          borderRadius={"10px"}
          color={"white"}
        >
          <Typography variant="h5">Category</Typography>
          <Box
            sx={{ display: "flex", flexDirection: "column", marginTop: "20px" }}
          >
            {navItems.map((nav) => {
              return (
                <Fragment key={nav.route}>
                  <ListItem disablePadding>
                    <Button
                      fullWidth
                      sx={{ justifyContent: "flex-start", height: "50px" }}
                    >
                      {nav.label}
                    </Button>
                  </ListItem>
                  <Divider sx={{ width: "100%", my: 1, bgcolor: "gray" }} />
                </Fragment>
              );
            })}
          </Box>
        </Box>
        <Box
          padding={"20px"}
          border={"1px solid gray"}
          borderRadius={"10px"}
          color={"white"}
          marginTop={"20px"}
        >
          <Typography variant="h5">Latest blog</Typography>
          <Box
            sx={{ display: "flex", flexDirection: "column", marginTop: "20px" }}
          >
            {blogPosts?.map((item) => {
              return (
                <Box marginTop={"20px"} key={item?.title}>
                  <Box display={"flex"} gap={"20px"} alignItems={"center"}>
                    <Image
                      src={item?.img}
                      alt={item?.title}
                      width={100}
                      height={200}
                      style={{ objectFit: "cover", borderRadius: "8px" }}
                    />
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        // gap: "10px",
                      }}
                    >
                      <Typography variant="body1">{item?.title}</Typography>
                      <Box
                        sx={{
                          marginTop: "20px",
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <Avatar
                          alt={item.author.name}
                          src={item.author.image}
                        />
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
                  <Divider
                    sx={{
                      width: "100%",
                      my: 1,
                      bgcolor: "gray",
                      marginTop: "20px",
                    }}
                  />
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SideBar;
