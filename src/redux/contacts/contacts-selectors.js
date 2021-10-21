import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.contacts;
export const getLoading = state => state.contacts.isLoading;
export const getFilter = state => state.contacts.filter;
export const getError = state => state.contacts.error;

export const getVisibleContacts = createSelector([getContacts, getFilter], (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));
});

// выполнится, если изменится contacts или filter
