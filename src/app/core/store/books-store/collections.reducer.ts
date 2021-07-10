import { createReducer, on } from "@ngrx/store";
import { addBook, removeBook } from "./books.actions";

export const INITIAL_STATE = [];

export const collectionsReducer = createReducer(INITIAL_STATE,
    on(addBook, (state, { bookId }) => [...state, bookId]),
    on(removeBook, (state, { bookId }) => state.filter(e => e !== bookId))
)