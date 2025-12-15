import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  resource,
  signal,
} from '@angular/core';
import {
  FormArray,
  FormBuilder,
  ReactiveFormsModule,
  Validators,
  FormsModule,
} from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { TextareaModule } from 'primeng/textarea';
import { SelectModule } from 'primeng/select';

import { Book } from '../models/book.model';
import { BookCardComponent } from '../book-card/book-card.component';

@Component({
  selector: 'rl-form',
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    FloatLabelModule,
    TextareaModule,
    SelectModule,
    FormsModule,

    BookCardComponent,
  ],
  templateUrl: './form.html',
  styleUrl: './form.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Form {
  private books = resource({
    loader: async () => {
      const response = await fetch(`http://localhost:3000/books/`);
      const books = await response.json();
      return books || [];
    },
  });

  protected booksList = computed(() => {
    const parsedRespose = this.books.value();
    if (parsedRespose) {
      return parsedRespose as Book[];
    }

    return [];
  });

  protected booksLoading = computed(() => this.books.isLoading());

  protected addedBooks = signal<Book[]>([]);

  private formBuilder = inject(FormBuilder);

  protected onBookSelected(book: Book) {
    this.addedBooks.update((prevList) => [...prevList, book]);
  }

  protected bookListForm = this.formBuilder.group({
    name: ['', Validators.required],
    description: [''],
    books: this.formBuilder.array([this.buildBookForm()]),
  });

  private buildBookForm() {
    return this.formBuilder.group({
      bookName: ['', Validators.required],
      author: ['', Validators.required],
      bookDescription: [''],
    });
  }

  private get booksControls() {
    return this.bookListForm.get('books') as FormArray;
  }

  protected addNewBook() {
    this.booksControls.push(this.buildBookForm());
  }
}
