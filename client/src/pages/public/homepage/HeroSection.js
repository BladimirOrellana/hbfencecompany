import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import heroSectionImage from "./../../../assets/images/hb-fence.webp";

const HeroSection = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        position: "relative", // Ensure overlay is positioned properly
        backgroundImage: `url(${heroSectionImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "#fff", // White text
        "::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)", // Black overlay with 60% opacity
          zIndex: 1, // Place overlay below content
        },
      }}
    >
      {/* Content Container */}
      <Container sx={{ zIndex: 2, position: "relative" }}>
        <Typography variant="h1" fontWeight="700">
          Secure Your Space in Style
        </Typography>
        <Typography variant="h5" sx={{ marginTop: 2 }}>
          Premium Fencing Solutions for Modern Living
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          sx={{ marginTop: 4 }}
        >
          Get a Free Quote
        </Button>
      </Container>
    </Box>
  );
};

export default HeroSection;
