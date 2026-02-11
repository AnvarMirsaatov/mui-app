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
    <Box >
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
              <Box marginTop={"20px"} key={item?.title} >
                <Box
                  display="flex"
                  gap="20px"
                  alignItems="center"
                  flexDirection={{ lg: "row", sm: "row", xs: "column" }}
                  sx={{
                    position: "relative",
                    borderRadius: "10px",
                    backgroundImage: { xs: `url(${item?.img})`, sm: "none" },
                    backgroundSize: { xs: "cover", sm: "unset" },
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    padding: { xs: "20px", sm: "0" },
                    overflow: "hidden",
                  }}
                >
                  <Box
                    sx={{
                      display: { xs: "block", sm: "none" },
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: "rgba(0,0,0,0.7)",
                      borderRadius: "10px",
                      zIndex: 1,
                    }}
                  />
                  <Image
                    src={item?.img}
                    alt={item?.title}
                    width={100}
                    height={200}
                    style={{

                      zIndex: '2',
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                    className="card-img"
                  />

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      width: { xs: "100%", sm: "auto" },
                      textAlign: { xs: "center", sm: "left" },
                      position: "relative",
                      zIndex: 2,
                      color: { xs: "white", sm: "inherit" }, // XS: oq text
                    }}
                  >
                    <Typography variant="body1">{item?.title}</Typography>

                    <Box
                      sx={{
                        marginTop: "5px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: { xs: "center", sm: "flex-start" },
                        gap: "10px",
                        flexDirection: "row"
                      }}
                    >
                      <Avatar alt={item.author.name} src={item.author.image} />
                      <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
                        <Typography sx={{ color: { xs: "#e5e5e5", sm: "#a1a1aa" } }}>
                          {item.author.name}
                        </Typography>
                        <Typography sx={{ color: { xs: "#e5e5e5", sm: "#a1a1aa" } }}>
                          {format(new Date(), "dd.MMM.yyyy")}
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
  );
};

export default SideBar;
