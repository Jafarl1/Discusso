import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    user: {
      profileImage: null,
      plans: [],
    },
  },
  reducers: {
    setUserProfileImage(state, action) {
      state.user.profileImage = action.payload;
    },
    setUserPlans(state, action) {
      state.user.plans = action.payload;
    },
  },
});

export const { setUserProfileImage, setUserPlans } = usersSlice.actions;

export default usersSlice.reducer;
