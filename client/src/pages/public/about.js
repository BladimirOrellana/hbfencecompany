import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";

const About = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        padding: 6,
        backgroundColor: "#f5f5f5",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container>
        <Typography variant="h3" textAlign="center" fontWeight="600" mb={4}>
          About HB Fence
        </Typography>
        <Typography
          variant="h6"
          textAlign="center"
          color="text.secondary"
          mb={6}
        >
          Enhancing Security, Privacy, and Style Since 2016
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" fontWeight="500" gutterBottom>
              Who We Are
            </Typography>
            <Typography variant="body1" color="text.secondary">
              HB Fence, based in Channelview, Texas, is a trusted provider of
              high-quality fencing solutions. As a family-owned and operated
              business, we have been committed to exceptional craftsmanship and
              customer service since 2016. Serving the entire Houston area, we
              pride ourselves on creating fencing solutions that are secure,
              stylish, and long-lasting.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" fontWeight="500" gutterBottom>
              Our Mission
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Our mission is to deliver top-tier fencing solutions that
              prioritize safety, privacy, and beauty. Whether you need a custom
              gate, fence installation, or repair services, we strive to exceed
              expectations with every project.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" fontWeight="500" gutterBottom>
              Why Choose Us?
            </Typography>
            <Typography variant="body1" color="text.secondary">
              - Experienced and skilled craftsmanship. <br />
              - Dedicated customer satisfaction. <br />
              - Affordable pricing without compromising quality. <br />-
              Family-owned values with a commitment to excellence.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" fontWeight="500" gutterBottom>
              Customer Testimonials
            </Typography>
            <Typography variant="body1" color="text.secondary">
              "Bladimir and his team did an excellent job. They worked above and
              beyond even during weather delays." <br />
              "Professional, fast, and high-quality service. Would recommend to
              anyone needing fencing!" <br />
              "Beautiful craftsmanship and great customer support throughout the
              process."
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
