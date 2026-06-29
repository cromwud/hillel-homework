import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Grid, Typography, CircularProgress } from '@mui/material';
import { fetchHotelsRequest } from '../../store/hotels/hotelsSlice';
import { selectHotels, selectHotelsLoading } from '../../store/hotels/hotelsSelectors';
import HotelCard from '../../components/HotelCard/HotelCard';

const HotelsPage = () => {
  const dispatch = useDispatch();
  const hotels = useSelector(selectHotels);
  const loading = useSelector(selectHotelsLoading);

  useEffect(() => {
    if (!hotels.length) {
      dispatch(fetchHotelsRequest());
    }
  }, [dispatch, hotels.length]);

  return (
    <Box sx={{ px: 4, pt: 3 }}>
      <Typography variant="h6" sx={{ fontWeight: 400, mb: 2 }}>
        Hotels
      </Typography>
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <CircularProgress sx={{ color: '#f5a623' }} />
        </Box>
      ) : (
        <Grid container spacing={3}>
          {hotels.map((hotel) => (
            <Grid item xs={12} sm={6} md={4} key={hotel.id}>
              <HotelCard hotel={hotel} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default HotelsPage;