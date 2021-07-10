import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "../../state/app.state";

export const selectBooks = createSelector(
    (state: AppState) => state.books,
    (books: Array<any>) => books
)

export const selectCollectionState = createFeatureSelector<AppState, Array<string>>('collection');

export const selectBooksFromCollection = createSelector(
    selectBooks,
    selectCollectionState,
    (books: Array<any>, collection: Array<string>) => {
        return collection.map((eachCollectionId) => books.find((book) => book.id === eachCollectionId))
    }
)