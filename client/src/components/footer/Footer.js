import React from "react";
import { Box, Typography, Container, IconButton } from "@mui/material";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#333", // Dark footer background
        color: "#fff", // White text
        padding: "20px 0",
        textAlign: "center",
      }}
    >
      <Container>
        <Typography variant="body1" mb={1}>
          © {new Date().getFullYear()} HB Fence. All Rights Reserved.
        </Typography>
        <Box>
          {/* Social Media Icons */}
          <IconButton
            href="https://facebook.com"
            target="_blank"
            sx={{ color: "#fff" }}
          >
            <Facebook />
          </IconButton>
          <IconButton
            href="https://instagram.com"
            target="_blank"
            sx={{ color: "#fff" }}
          >
            <Instagram />
          </IconButton>
          <IconButton
            href="https://twitter.com"
            target="_blank"
            sx={{ color: "#fff" }}
          >
            <Twitter />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
