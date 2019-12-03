import axios from 'axios';
import { NextPage } from 'next';
import React from 'react';
import Head from 'next/head';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const StyledPaper = styled(Paper)`
  margin-bottom: 2rem;
  margin-top: 2rem;
  min-height: calc(100vh - 4rem - 5rem);
  padding: 2rem;
`;

interface Props {
  greatOldOnes: GreatOldOne[];
}

const Home: NextPage<Props> = ({ greatOldOnes }: Props) => (
  <div>
    <Head>
      <title>next-js-project-template</title>
      <link href="/favicon.ico" rel="icon" />
    </Head>
    <Container>
      <StyledPaper>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h4">Great Old Ones</Typography>
            <ul></ul>
            {greatOldOnes.map((greatOldOne) => (
              <li key={greatOldOne}>{greatOldOne}</li>
            ))}
          </Grid>
        </Grid>
      </StyledPaper>
    </Container>
  </div>
);

type GreatOldOne = string;

Home.getInitialProps = async () => {
  const { data: greatOldOnes } = await axios.get<GreatOldOne[]>(
    `${process.env.APP_API_URL}/great-old-ones`,
  );

  return {
    greatOldOnes,
  };
};

export default Home;
