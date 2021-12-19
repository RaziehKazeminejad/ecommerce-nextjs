import React, { Children } from 'react';
import Head from 'next/head';
import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';

export default function Layout({children}) {
  return (
    <div>
      <Head>
        <title>Next Raika</title>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography>Raika</Typography>
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
      <footer>
          <Typography>
              All rights reserved. Next Raika
          </Typography>
      </footer>
    </div>
  );
}