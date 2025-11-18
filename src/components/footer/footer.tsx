import { Box, ButtonGroup, Typography, Button } from "@mui/material";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Telegram,
  GitHub,
} from "@mui/icons-material";
import { format } from "date-fns";
const Footer = () => {
  return (
    <Box
      padding={"20px"}
      margin={0}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#141414",
        color: "white",
      }}
    >
      <Typography>
        © {format(new Date(), "yyyy")} MAB. All Right Reserved.
      </Typography>
      <ButtonGroup variant="text" aria-label="Basic button group">
        <Button>
          <LinkedIn sx={{ color: "white" }} />
        </Button>
        <Button>
          <Facebook sx={{ color: "white" }} />
        </Button>
        <Button>
          <Instagram sx={{ color: "white" }} />
        </Button>
        <Button>
          <GitHub sx={{ color: "white" }} />
        </Button>
        <Button>
          <Telegram sx={{ color: "white" }} />
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default Footer;
