import { ChangeDetectionStrategy, Component, computed, inject, resource } from '@angular/core';
import { FormArray, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TuiTextfieldComponent, TuiLabel, TuiTextfieldDirective, TuiAppearance, TuiButton } from "@taiga-ui/core";
import { TuiTextarea } from '@taiga-ui/kit';
import { TuiForm, TuiCardLarge, TuiHeader } from '@taiga-ui/layout';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule, TuiTextfieldComponent, TuiLabel, TuiTextfieldDirective, TuiTextarea, TuiForm, TuiCardLarge, TuiAppearance, TuiHeader, TuiButton],
  templateUrl: './form.html',
  styleUrl: './form.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Form {
  private books = resource({
    loader: async () => {
      const response = await fetch(`https://gutendex.com/books/`);
      return await response.json();
    }
  });

  protected booksList = computed(() => {
    const parsedRespose = this.books.value();
    if (parsedRespose) {
      return (parsedRespose.results as Array<{ title: string }>).map(res => res.title);
    }

    return [];
  });

  private formBuilder = inject(FormBuilder);

  protected bookListForm = this.formBuilder.group({
    name: ['', Validators.required],
    description: [''],
    books: this.formBuilder.array([this.buildBookForm()])
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
