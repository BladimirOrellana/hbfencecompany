import React from "react";
import { Box, Typography, Grid, Container } from "@mui/material";
import { Security, Landscape, Build } from "@mui/icons-material";

const features = [
  {
    icon: <Security fontSize="large" />,
    title: "Maximum Security",
    description: "Built to last with high-quality materials.",
  },
  {
    icon: <Landscape fontSize="large" />,
    title: "Beautiful Design",
    description: "Enhance your property with custom styles.",
  },
  {
    icon: <Build fontSize="large" />,
    title: "Easy Installation",
    description: "Quick and hassle-free installation.",
  },
];

const FeatureSection = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh", // Minimum height to fill the viewport
        display: "flex", // Flexbox for vertical alignment
        alignItems: "center", // Center items vertically
        justifyContent: "center", // Center items horizontally
        padding: 6,
        backgroundColor: "#f5f5f5", // Background color
      }}
    >
      <Container>
        <Typography variant="h3" textAlign="center" fontWeight="600" mb={4}>
          Why Choose HB Fence?
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index} textAlign="center">
              <Box mb={2}>{feature.icon}</Box>
              <Typography variant="h5" fontWeight="500" gutterBottom>
                {feature.title}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {feature.description}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeatureSection;
