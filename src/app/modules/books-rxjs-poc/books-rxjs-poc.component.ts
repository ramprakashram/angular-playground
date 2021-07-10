import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { addBook, removeBook, retrieveBookList } from 'src/app/core/store/books-store/books.actions';
import { selectCollectionState, selectBooks, selectBooksFromCollection } from '../../core/store/books-store/books.selectors';
import { GoogleBooksService } from './services/google-books.service';
@Component({
  selector: 'app-books-rxjs-poc',
  templateUrl: './books-rxjs-poc.component.html',
  styleUrls: ['./books-rxjs-poc.component.scss']
})
export class BooksRxjsPocComponent implements OnInit {

  books$ = this.store.pipe(select(selectBooks));
  bookCollection$ = this.store.pipe(select(selectBooksFromCollection));

  onAdd(bookId) {
    this.store.dispatch(addBook({ bookId }));
  }

  onRemove(bookId) {
    this.store.dispatch(removeBook({ bookId }));
  }

  constructor (
    private booksService: GoogleBooksService,
    private store: Store
  ) { }

  ngOnInit() {
    this.booksService
      .getBooks()
      .subscribe((Book) => this.store.dispatch(retrieveBookList({ Book })));
  }

}
