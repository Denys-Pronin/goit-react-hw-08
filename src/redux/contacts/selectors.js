import { createSelector } from "@reduxjs/toolkit";

export const error = (state) => state.contacts.error;
export const loading = (state) => state.contacts.loading;
export const contacts = (state) => state.contacts.items;
export const filterName = (state) => state.filter.name;
export const filteredContacts = createSelector(
  [contacts, filterName],
  (items, textFilter) => {
    return items.filter((contact) =>
      contact.name.toLowerCase().includes(textFilter.toLowerCase())
    );
  }
);
