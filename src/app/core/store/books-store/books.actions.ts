import { createAction, props } from "@ngrx/store";

export const addBook = createAction('[Book List] Add Book', props<{ bookId }>());

export const removeBook = createAction('[Book List] Remove Book', props<{ bookId }>());

export const retrieveBookList = createAction('[Book List] Book List', props<{ Book }>())