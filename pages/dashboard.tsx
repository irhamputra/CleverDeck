import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

// Components
import Head from "../components/Head";
import Layout from "../src/Layout";
import Cards from "../components/Cards";

// define Props for Dashboard here

interface StatelessPage<P = {}> extends React.FC<P> {
  getInitialProps?: (ctx: any) => Promise<P>;
}

const Dashboard: StatelessPage = () => {
  return (
    <Layout>
      <Head title="Dashboard | Cleverdeck.com" description="CleverDeck.inc - Education Software Company" />
      <Container>
        <Box my={3}>
          <Typography variant="h5" component="h3" gutterBottom>
            Dashboard
          </Typography>
          <Box my={3}>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="stretch"
              xs={12}
              spacing={1}
            >
              <Grid item xs>
                <Cards
                  title="Matematika SMA XI"
                  createdAt="12.08.2019"
                  description="Ekomonomi tentang supply and demand"
                  teacher="R"
                />
              </Grid>

              <Grid item xs>
                <Cards
                  title="Matematika SMA XI"
                  createdAt="12.08.2019"
                  description="Ekomonomi tentang supply and demand"
                  teacher="R"
                />
              </Grid>

              <Grid item xs>
                <Cards
                  title="Matematika SMA XI"
                  createdAt="12.08.2019"
                  description="Ekomonomi tentang supply and demand"
                  teacher="R"
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
};

Dashboard.getInitialProps = async () => {
  return {};
};

export default Dashboard;
