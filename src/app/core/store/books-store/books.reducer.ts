import { createReducer, on } from "@ngrx/store";
import { retrieveBookList } from "./books.actions";

export const INITIAL_STATE = [];

export const booksReducer = createReducer(INITIAL_STATE, on(retrieveBookList, (state, { Book }) => [...Book]))