import { createReducer, on } from "@ngrx/store";
import { addBook, removeBook } from "./books.actions";

export const INITIAL_STATE = [];

export const collectionsReducer = createReducer(INITIAL_STATE,
    on(addBook, (state, { bookId }) => {
        if (state.indexOf(bookId) === -1) {
            return [...state, bookId]
        } else {
            return state
        }
    }),
    on(removeBook, (state, { bookId }) => state.filter(e => e !== bookId))
)