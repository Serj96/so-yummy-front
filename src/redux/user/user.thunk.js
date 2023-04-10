import { createAsyncThunk } from '@reduxjs/toolkit';
import { processingError, successNotification } from 'helpers';

import { subscribeService } from 'services/subscribe.service';

export const subscribeThunk = createAsyncThunk(
  'user/subscribe',
  async (email, { rejectWithValue }) => {
    try {
      const { data } = await subscribeService(email);
      successNotification('Subscription successful');
      return data;
    } catch (error) {
      return rejectWithValue(processingError(error));
    }
  }
);
