import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Cards from "./Cards";

interface StatelessPage<P = {}> extends React.FC<P> {
  getInitialProps?: (ctx: any) => Promise<P>;
}

// Receiving getInitialProps
const Homeworks: StatelessPage = () => {
  return (
    <Box my={3}>
      <Typography variant="h5" component="h3" gutterBottom>
        PR Kamu hari ini (4)
      </Typography>
      <Box my={3}>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="stretch"
          wrap="nowrap"
          xs={12}
          spacing={1}
        >
          <Grid item lg>
            <Cards
              title="Matematika"
              createdAt="12.08.2019"
              description="Ekomonomi tentang supply and demand"
              teacher="I"
            />
          </Grid>

          <Grid item xs>
            <Cards
              title="Ekonomi"
              createdAt="12.08.2019"
              description="Ekomonomi tentang supply and demand"
              teacher="O"
            />
          </Grid>

          <Grid item xs>
            <Cards
              title="Sejarah"
              createdAt="12.08.2019"
              description="Ekomonomi tentang supply and demand"
              teacher="P"
            />
          </Grid>

          <Grid item xs>
            <Cards
              title="Geografi"
              createdAt="12.08.2019"
              description="Ekomonomi tentang supply and demand"
              teacher="P"
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

Homeworks.getInitialProps = async () => {
  return {};
};

export default Homeworks;
