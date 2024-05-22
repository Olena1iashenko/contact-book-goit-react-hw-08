import { createSlice } from "@reduxjs/toolkit";
import {
  addContactThunk,
  deleteContactThunk,
  editContactThunk,
  fetchContactsThunk,
} from "../contacts/operations";
import { logoutThunk } from "../auth/operations";

const contactsInitialState = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContactsThunk.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(logoutThunk.fulfilled, () => {
        return contactsInitialState;
      })
      .addCase(addContactThunk.fulfilled, (state, { payload }) => {
        state.items = [...state.items, payload];
      })
      .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
        state.items = state.items.filter((item) => item.id !== payload.id);
      })
      .addCase(editContactThunk.fulfilled, (state, { payload }) => {
        const item = state.items.findIndex((item) => item.id === payload.id);
        state.items[item] = payload;
      })
      .addMatcher(
        ({ type }) => type.endsWith("/pending"),
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith("/fulfilled"),
        (state) => {
          state.loading = false;
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith("/rejected"),
        (state, { error }) => {
          state.loading = false;
          state.error = error;
        }
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
