import React from 'react';
import { Box, Typography } from '@mui/material';

const AboutPage = () => (
  <Box sx={{ px: 4, pt: 4 }}>
    <Typography variant="h6" sx={{ fontWeight: 400, mb: 2 }}>
      About
    </Typography>
    <Typography variant="body2" sx={{ color: 'text.secondary', maxWidth: 720, lineHeight: 1.8 }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
      sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Typography>
  </Box>
);

export default AboutPage;