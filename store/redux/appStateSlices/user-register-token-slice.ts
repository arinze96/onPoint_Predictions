import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type UserRegisterTokenState = {
  token: string;
};

const initialState: UserRegisterTokenState = {
  token: "",
};

const userRegisterTokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setUserRegToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
  },
});

export const { setUserRegToken } = userRegisterTokenSlice.actions;
export default userRegisterTokenSlice.reducer;
