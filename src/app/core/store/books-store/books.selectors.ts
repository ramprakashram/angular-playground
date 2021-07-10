import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Book } from "../../../models/books.model";
import { AppState } from "../../state/app.state";

export const selectBooks = createSelector(
    (state: AppState) => state.books,
    (books: Array<Book>) => books
)

export const selectCollectionState = createFeatureSelector<AppState, Array<string>>('collection');

export const selectBooksFromCollection = createSelector(
    selectBooks,
    selectCollectionState,
    (books: Array<Book>, collection: Array<string>) => {
        return collection.map((eachCollectionId) => books.find((book) => book.id === eachCollectionId))
    }
)