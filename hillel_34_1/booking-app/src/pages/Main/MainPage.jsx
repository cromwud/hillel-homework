import React, { useEffect } from 'react';
import { Form, Field } from 'react-final-form';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Button,
  MenuItem,
  Select,
  TextField,
  Typography,
  CircularProgress,
} from '@mui/material';
import { fetchDestinationsRequest, submitBookingRequest } from '../../store/booking/bookingSlice';
import { selectDestinations, selectBookingLoading } from '../../store/booking/bookingSelectors';

const validate = (values) => {
  const errors = {};
  if (!values.destination) errors.destination = 'Required';
  if (!values.checkIn) errors.checkIn = 'Required';
  if (!values.checkOut) errors.checkOut = 'Required';
  if (!values.adults) errors.adults = 'Required';
  return errors;
};

const MainPage = () => {
  const dispatch = useDispatch();
  const destinations = useSelector(selectDestinations);
  const loading = useSelector(selectBookingLoading);

  useEffect(() => {
    dispatch(fetchDestinationsRequest());
  }, [dispatch]);

  const onSubmit = (values) => {
    console.log('submitting', values);
    dispatch(submitBookingRequest(values));
  };

  return (
    <Box sx={{ px: 4, pt: 3 }}>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit, errors, touched }) => (
          <form onSubmit={handleSubmit}>
            <Box
              sx={{
                display: 'flex',
                gap: 1,
                alignItems: 'flex-start',
                mb: 4,
                flexWrap: 'wrap',
              }}
            >
              {/* Destination */}
              <Field name="destination">
                {({ input, meta }) => (
                  <Select
                    {...input}
                    displayEmpty
                    size="small"
                    sx={{
                      minWidth: 160,
                      bgcolor: 'white',
                      outline: meta.touched && meta.error ? '1px solid red' : undefined,
                    }}
                    renderValue={(val) =>
                      val
                        ? destinations.find((d) => d.value === val)?.label
                        : <span style={{ color: '#999' }}>Destination</span>
                    }
                  >
                    {destinations.map((d) => (
                      <MenuItem key={d.id} value={d.value}>
                        {d.label}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              </Field>

              {/* Check In */}
              <Field name="checkIn">
                {({ input, meta }) => (
                  <TextField
                    {...input}
                    type="date"
                    size="small"
                    error={meta.touched && !!meta.error}
                    placeholder="Check in"
                    sx={{ width: 160 }}
                  />
                )}
              </Field>

              {/* Check Out */}
              <Field name="checkOut">
                {({ input, meta }) => (
                  <TextField
                    {...input}
                    type="date"
                    size="small"
                    error={meta.touched && !!meta.error}
                    placeholder="Check out"
                    sx={{ width: 160 }}
                  />
                )}
              </Field>

              {/* Adults */}
              <Field name="adults">
                {({ input, meta }) => (
                  <TextField
                    {...input}
                    size="small"
                    placeholder="Adults"
                    type="number"
                    error={meta.touched && !!meta.error}
                    sx={{ width: 90 }}
                  />
                )}
              </Field>

              {/* Children */}
              <Field name="children">
                {({ input }) => (
                  <TextField
                    {...input}
                    size="small"
                    placeholder="Childr..."
                    type="number"
                    sx={{ width: 90 }}
                  />
                )}
              </Field>

              {/* Submit */}
              <Button
                type="submit"
                variant="contained"
                disabled={loading}
                sx={{
                  bgcolor: '#f5a623',
                  color: 'white',
                  fontWeight: 700,
                  px: 3,
                  height: 40,
                  '&:hover': { bgcolor: '#e09000' },
                }}
              >
                {loading ? <CircularProgress size={20} color="inherit" /> : 'SUBMIT'}
              </Button>
            </Box>

           
          </form>
        )}
      />

      <Box>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
          Travel With{' '}
          <Box component="span" sx={{ color: '#f5a623' }}>
            Booking
          </Box>
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', maxWidth: 720, lineHeight: 1.8 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </Typography>
      </Box>
    </Box>
  );
};

export default MainPage;