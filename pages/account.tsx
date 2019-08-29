import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Layout from "../src/Layout";
import Head from "../components/Head";

const Profile = () => {
  return (
    <Layout>
      <Head title="My Account" />

      <Container>
        <Box my={6}>
          <Typography variant="h4" component="h1" gutterBottom>
            Account page
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet
          </Typography>
        </Box>
      </Container>
    </Layout>
  );
};

export default Profile;
