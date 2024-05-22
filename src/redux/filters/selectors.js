import { createSelector } from "@reduxjs/toolkit";

export const selectAllContacts = (state) => state.contacts.items;
export const selectFilter = (state) => state.filters.name;

export const selectFilteredContacts = createSelector(
  [selectAllContacts, selectFilter],
  (contacts, filterName) => {
    if (!filterName) {
      return contacts;
    }
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filterName.toLowerCase())
    );
  }
);
