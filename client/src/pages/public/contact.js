import React from "react";
import {
  Box,
  Container,
  Grid,
  TextField,
  Button,
  Typography,
} from "@mui/material";

const Contact = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f5f5",
        padding: 4,
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h3" textAlign="center" fontWeight="600" mb={4}>
          Contact Us
        </Typography>
        <Typography
          variant="h6"
          textAlign="center"
          color="text.secondary"
          mb={4}
        >
          Have questions or need a quote? Fill out the form below, and we’ll get
          back to you shortly!
        </Typography>
        <Grid container spacing={4}>
          {/* Contact Form */}
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              margin="normal"
            />
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              margin="normal"
            />
            <TextField
              fullWidth
              label="Phone Number"
              variant="outlined"
              margin="normal"
            />
            <TextField
              fullWidth
              label="Message"
              multiline
              rows={4}
              variant="outlined"
              margin="normal"
            />
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ marginTop: 2 }}
            >
              Submit
            </Button>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6" fontWeight="500" mb={2}>
              Contact Information:
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={1}>
              <strong>Phone:</strong> (832) 296-4721
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={1}>
              <strong>Email:</strong> info@hbfence.com
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={1}>
              <strong>Address:</strong> 15608 S Brentwood St, Channelview, TX
              77530
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
