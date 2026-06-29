import React from 'react';
import { Card, CardMedia, CardContent, Typography, Divider } from '@mui/material';

const PLACEHOLDER = 'https://via.placeholder.com/140x140';

const HotelCard = ({ hotel }) => {
  return (
    <Card elevation={0} sx={{ border: 'none' }}>
      <CardMedia
        component="img"
        image={hotel.image || PLACEHOLDER}
        alt={hotel.name}
        sx={{ width: '100%', height: 140, objectFit: 'cover', bgcolor: '#d0d0d0' }}
      />
      <CardContent sx={{ px: 0, pb: '8px !important' }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 700, fontSize: '0.95rem', mb: 0.5 }}>
          {hotel.name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.78rem' }}>
          address: {hotel.address}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.78rem' }}>
          city: {hotel.city}, state: {hotel.state}, country code: {hotel.country_code}
        </Typography>
      </CardContent>
      <Divider />
    </Card>
  );
};

export default HotelCard;