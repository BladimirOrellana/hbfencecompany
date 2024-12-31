import React from "react";
import { Box, Typography, Button } from "@mui/material";

const Home = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h1" color="primary">
        Welcome to HB Fence
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Serving Channelview and all Houston areas.
      </Typography>
      <Button variant="contained" color="secondary" sx={{ marginTop: 2 }}>
        Get a Quote
      </Button>
    </Box>
  );
};

export default Home;
