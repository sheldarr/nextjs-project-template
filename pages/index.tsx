import { NextPage } from 'next';
import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import useGreatOldOnes from '../hooks/useGreatOldOnes';

const StyledPaper = styled(Paper)`
  margin-bottom: 2rem;
  margin-top: 2rem;
  min-height: calc(100vh - 4rem - 5rem);
  padding: 2rem;
`;

const Home: NextPage = () => {
  const { data: greatOldOnes } = useGreatOldOnes();

  return (
    <Container>
      <StyledPaper>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h4">Great Old Ones</Typography>
            <ul>
              {greatOldOnes?.map((greatOldOne) => (
                <li key={greatOldOne}>{greatOldOne}</li>
              ))}
            </ul>
          </Grid>
        </Grid>
      </StyledPaper>
    </Container>
  );
};

export default Home;
