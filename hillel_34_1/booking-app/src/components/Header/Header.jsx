import React from 'react';
import { AppBar, Toolbar, Box, Button, Typography } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import { useDispatch } from 'react-redux';
import { push } from 'redux-first-history';

const Header = () => {
  const dispatch = useDispatch();

  return (
    <AppBar position="static" elevation={0} sx={{ bgcolor: 'white', borderBottom: '1px solid #e0e0e0' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box
          sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer' }}
          onClick={() => dispatch(push('/'))}
        >
          <CircleIcon sx={{ color: '#f5a623', fontSize: 32 }} />
          <Typography variant="h6" sx={{ color: '#f5a623', fontWeight: 700 }}>
            Booking
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button
            variant="contained"
            size="small"
            onClick={() => dispatch(push('/'))}
            sx={{
              bgcolor: '#f5a623',
              color: 'white',
              fontWeight: 700,
              fontSize: '0.7rem',
              '&:hover': { bgcolor: '#e09000' },
            }}
          >
            HOME
          </Button>
          <Button
            variant="contained"
            size="small"
            onClick={() => dispatch(push('/about'))}
            sx={{
              bgcolor: '#f5a623',
              color: 'white',
              fontWeight: 700,
              fontSize: '0.7rem',
              '&:hover': { bgcolor: '#e09000' },
            }}
          >
            ABOUT
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;