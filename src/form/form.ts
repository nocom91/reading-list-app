import { ChangeDetectionStrategy, Component, computed, inject, resource } from '@angular/core';
import { FormArray, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  TuiTextfield,
  TuiLabel,
  TuiTextfieldDirective,
  TuiAppearance,
  TuiButton,
  TuiDataList,
} from '@taiga-ui/core';
import {
  TuiComboBox,
  TuiTextarea,
  TuiStringifyContentPipe,
  TuiFilterByInputPipe,
  TuiSelectDirective,
  TuiDataListWrapper,
  TuiChevron,
  TuiSelect,
} from '@taiga-ui/kit';
import { TuiForm, TuiCardLarge, TuiHeader } from '@taiga-ui/layout';

@Component({
  selector: 'app-form',
  imports: [
    ReactiveFormsModule,
    TuiChevron,
    TuiTextfield,
    TuiLabel,
    TuiSelect,
    TuiTextfieldDirective,
    TuiTextarea,
    TuiForm,
    TuiDataListWrapper,
    TuiCardLarge,
    TuiAppearance,
    TuiHeader,
    TuiButton,
    TuiComboBox,
    TuiStringifyContentPipe,
    TuiFilterByInputPipe,
    TuiSelectDirective,
  ],
  templateUrl: './form.html',
  styleUrl: './form.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Form {
  private books = resource({
    loader: async () => {
      const response = await fetch(`https://gutendex.com/books/`);
      return await response.json();
    },
  });

  protected booksList = computed(() => {
    const parsedRespose = this.books.value();
    if (parsedRespose) {
      return (parsedRespose.results as Array<{ title: string }>).map((res) => res.title);
    }

    return [];
  });

  private formBuilder = inject(FormBuilder);

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
