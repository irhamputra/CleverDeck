import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Layout from "../src/Layout";
import Head from "../components/Head";

const Profile = () => {
  return (
    <Layout>
      <Head title="Profile" />

      <Container>
        <Box my={6}>
          <Typography variant="h4" component="h1" gutterBottom>
            Profile page
          </Typography>
        </Box>
      </Container>
    </Layout>
  );
};

export default Profile;
