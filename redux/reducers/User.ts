import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type State = {
  firstName: string;
  lastName: string;
  userId: number;
  profileImage: string;
};

const initialState: State = {
  firstName: 'Nata',
  lastName: 'Vacheishvili',
  userId: 1,
  profileImage:
    'https://cdn.dribbble.com/users/1577045/screenshots/4914645/media/028d394ffb00cb7a4b2ef9915a384fd9.png?compress=1&resize=400x300&vertical=top',
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
    resetToInitialState: () => {
      return initialState;
    },
  },
});

export const {
  updateFirstName,
  updateLastName,
  updateUserId,
  resetToInitialState,
} = User.actions;

export default User.reducer;
