import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type State = {
  firstName: string;
  lastName: string;
  userId: number;
};

const initialState: State = {
  firstName: 'Nata',
  lastName: 'Vacheishvili',
  userId: 1,
};

export const User = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    updateFirstName: (state, action: PayloadAction<string>) => {
      state.firstName = action.payload;
    },
    updateLastName: (state, action: PayloadAction<string>) => {
      state.lastName = action.payload;
    },
    updateUserId: (state, action: PayloadAction<number>) => {
      state.userId = action.payload;
    },
  },
});

export const {updateFirstName, updateLastName, updateUserId} = User.actions;

export default User;
