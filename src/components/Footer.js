import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Logo from "../assets/images/Logo-1.png";
const Footer = () => {
  return (
    <Box mt='80px' bgcolor='#FFF3F4'>
      <Stack gap='40px' alignItems={"center"} px='40px' pt='40px'>
        <img src={Logo} alt='logo' width='200px' height='40px' />
        <Typography variant='h5' pb='10px ' mt='40px'>
          Made with ❤️ by PaulAwadalla
        </Typography>
        <Box mb='30px' flexDirection={"row"} sx={{ gap: "24px" }}>
          <a href='https://github.com/PaulAwadalla'>
            <FontAwesomeIcon icon={faGithub} size='3x' />
          </a>
          <a href='https://www.linkedin.com/in/paulawadalla/'>
            <FontAwesomeIcon icon={faLinkedin} size='3x' />
          </a>
        </Box>
      </Stack>
    </Box>
  );
};

export default Footer;
