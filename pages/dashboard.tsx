import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

import Head from "../components/Head";
import Layout from "../src/Layout";
import Homeworks from "../components/Homeworks";
import Quizzes from "../components/Quizzes";

// define Props for Dashboard here

interface StatelessPage<P = {}> extends React.FC<P> {
  getInitialProps?: (ctx: any) => Promise<P>;
}

const Dashboard: StatelessPage = () => {
  return (
    <Layout>
      <Head
        title="Dashboard | Cleverdeck.com"
        description="CleverDeck.com - Education Software Company"
      />
      <Container>
        <Box my={4}>
          <Homeworks />
          <Quizzes />
        </Box>
      </Container>
    </Layout>
  );
};

Dashboard.getInitialProps = async () => {
  return {};
};

export default Dashboard;
