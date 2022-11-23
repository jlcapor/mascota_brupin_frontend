import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import usersService from "../../../services/user.service";


const usersAdapter = createEntityAdapter();

const initialState = usersAdapter.getInitialState({
  status: "idle", //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
  count: 0,
});

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await usersService.getAll();
  return response.data;
});

export const addNewUsers = createAsyncThunk(
  "users/addNewUsers",
  async (initialUser) => {
    const response = await usersService.createUser(initialUser);
    return response.data;
  }
);

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},

  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        usersAdapter.upsertMany(state, action.payload)
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addNewUsers.fulfilled, usersAdapter.addOne);
  },
});

export default userSlice.reducer;

export const { 
  selectAll: selectAllUsers, 
  selectById: selectUserById,
  selectIds: selectUserIds
} = usersAdapter.getSelectors((state) => state.users);


export const getUserStatus = (state) => state.users.status;
export const getUserError = (state) => state.users.error;
export const getCount = (state) => state.users.count;

