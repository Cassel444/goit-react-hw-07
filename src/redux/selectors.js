import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;
export const selectNameFilter = state => state.filters.name;

export const selectFilteredContacts = createSelector(
    [selectContacts, selectNameFilter], (contacts, statusFilter) => {

        return contacts.filter((contact) => {
            if (typeof contact.name === "string") {
                return contact.name.toLowerCase().includes(statusFilter.toLowerCase());
            }
            return false;
        });
    }
)
