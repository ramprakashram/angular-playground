import { Book } from "../../models/books.model";
import { CovidReducerState } from "../store/covid-store/covid.reducer";

export interface AppState {
    books: Array<Book>;
    collection: ReadonlyArray<string>;
    covid: CovidReducerState
}