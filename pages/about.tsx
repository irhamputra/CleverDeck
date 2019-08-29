import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import Layout from "../src/Layout";

export default function App() {
  return (
    <Layout>
      <Container>
        <Box my={6}>
          <Typography component="h4" variant="h4">
            About
          </Typography>
        </Box>
      </Container>
    </Layout>
  );
}
