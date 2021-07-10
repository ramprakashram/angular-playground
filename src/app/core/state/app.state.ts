import { Book } from "../../models/books.model";

export interface AppState {
    books: Array<Book>;
    collection: ReadonlyArray<string>;
}