import {createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import contactService from "../../../services/contact.service";
const initialState = {
  contactData: [],
  status: "idle",
};

export const saveNewContact = createAsyncThunk(
  "contacts/saveNewContact",
  async (contact) => {
    const response = await contactService.createContact(contact);
    return response.data;
  }
);

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    allContactLoading: (state) => {
      if (state.status === "idle") {
        state.status = "pending";
      }
    },
    allContactRecieved: (state, { payload }) => {
      state.status = "idle";
      state.contactData = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(saveNewContact.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(saveNewContact.fulfilled, (state, action) => {
      state.status = "idle";
      state.contactData.push(action.payload);
    });
  },
});

export const { allContactLoading, allContactRecieved } = contactsSlice.actions;

export const getAllContact = (state) => state.contact.contactData;
export const getLoading = (state) => state.contact.status;

export default contactsSlice.reducer;
