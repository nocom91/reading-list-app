import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
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
