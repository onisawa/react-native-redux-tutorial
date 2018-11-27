import {
  SELECT_LIBRARY,
  EMAIL_CHANGED,
  PASSWORD_CHANGED
} from './types';

export const selectLibrary = (libraryId) => ({
  type: SELECT_LIBRARY,
  payload: libraryId
});

export const emailChanged = (text) => ({
  type: EMAIL_CHANGED,
  payload: text
});

export const passwordChanged = (text) => ({
  type: PASSWORD_CHANGED,
  payload: text
});
