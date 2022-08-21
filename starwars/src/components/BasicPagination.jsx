import * as React from 'react';
import Pagination from '@mui/material/Pagination';

import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    neutral: {
      main: '#111',
      contrastText: '#ffe81f',
    },
  },
});

export default function BasicPagination(pagesNumber) {
  return (
    <ThemeProvider theme={theme}>  
      <Pagination count={pagesNumber} siblingCount={0} size="small" color='neutral'/>
    </ThemeProvider>
  );
}